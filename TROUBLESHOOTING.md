# Troubleshooting Guide

## Port Already in Use / Lock File Error

If you see:
```
⨯ Unable to acquire lock at .next/dev/lock, is another instance of next dev running?
```

**Solution:**
```bash
# Kill any running Next.js processes
pkill -f "next dev"

# Or kill processes on specific ports
lsof -ti:3000,3002 | xargs kill -9

# Clean up lock files
rm -rf .next

# Restart the dev server
npm run dev
```

## Workspace Root Warning

The warning about multiple lockfiles is harmless but can be suppressed. The `next.config.ts` has been updated to handle this.

If you still see the warning, you can:
1. Remove any lockfiles in parent directories (if not needed)
2. Or ignore the warning - it doesn't affect functionality

## Server Not Starting

If the server won't start:
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run dev
```

## Build Errors

If you get build errors:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Browser Issues

- Clear browser cache
- Try in incognito mode
- Check browser console for errors
- Ensure WebGL is enabled in your browser
