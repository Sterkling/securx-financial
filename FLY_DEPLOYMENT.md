# Fly.io Deployment Instructions

## One-Time Setup: Create Volume and Scale to 1 Machine

The deployment failed because volumes must be created before deploying with mounts. Follow these steps to fix it:

### 1. First, scale down to 1 machine (using current deployed version)

```bash
fly scale count 1 --region yyz
```

This removes the second machine so we only need to create 1 volume.

### 2. (Optional) Back up existing data

If you have existing submission data you want to preserve, back it up first:

```bash
fly ssh console -C "cat /app/data/securx.db" > securx-backup.db
```

### 3. Create the persistent volume

```bash
fly volumes create securx_data --region yyz --size 1
```

This creates a 1GB persistent volume in the Toronto (yyz) region for your SQLite database.

### 4. Deploy the updated configuration

Now deploy manually (since GitHub Actions already ran):

```bash
fly deploy
```

Or trigger GitHub Actions by pushing a commit.

### 5. (Optional) Restore backed up data

If you backed up data in step 2, restore it:

```bash
fly ssh console -C "cat > /data/securx.db" < securx-backup.db
```

## Verify the Setup

Check that you have exactly 1 machine running:

```bash
fly status
```

You should see only 1 machine in the list.

Check that the volume is mounted:

```bash
fly ssh console -C "df -h /data"
```

You should see the `securx_data` volume mounted at `/data`.

## What Changed

- **fly.toml**: Added `[[mounts]]` section to mount persistent volume at `/data`
- **lib/database.ts**: Updated to use `/data` in production (ephemeral `process.cwd()/data` in dev)
- **Machine count**: Scaled from 2 machines to 1 machine

## Benefits

- **Data persistence**: SQLite database survives deploys and restarts
- **Cost savings**: Running 1 machine instead of 2
- **Data consistency**: No more split-brain database issues from load balancing across 2 machines
