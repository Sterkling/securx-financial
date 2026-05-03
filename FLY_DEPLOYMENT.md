# Fly.io Deployment Instructions

## One-Time Setup: Create Volume and Scale to 1 Machine

Before deploying the updated configuration, run these commands:

### 1. Create the persistent volume

```bash
fly volumes create securx_data --region yyz --size 1
```

This creates a 1GB persistent volume in the Toronto (yyz) region for your SQLite database.

### 2. (Optional) Back up existing data

If you have existing submission data you want to preserve, back it up first:

```bash
fly ssh console -C "cat /app/data/securx.db" > securx-backup.db
```

After deploying, you can restore it:

```bash
fly ssh console -C "cat > /data/securx.db" < securx-backup.db
```

### 3. Deploy the updated configuration

Either push to main (triggers GitHub Actions) or deploy manually:

```bash
fly deploy
```

### 4. Scale down to 1 machine

```bash
fly scale count 1 --region yyz
```

This removes the redundant second machine and ensures only 1 machine runs going forward.

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
