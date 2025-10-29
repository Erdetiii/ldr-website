# Password Protection Information

## Current Password
The website is now password-protected with the password:
```
pallaqinka me keqap
```

## How to Change the Password

### Option 1: Edit the Component File (Recommended)

1. Open the file: `/components/PasswordProtection.tsx`

2. Look for this section at the top of the file (around line 6-8):
   ```typescript
   // ⚠️ PASSWORD CONFIGURATION ⚠️
   // Change the password here if needed:
   const CORRECT_PASSWORD = "pallaqinka me keqap";
   ```

3. Change the password between the quotes:
   ```typescript
   const CORRECT_PASSWORD = "your new password here";
   ```

4. Save the file and refresh your browser

### Example: Changing to a Different Password

If you want to change it to "ilove you2024", edit the line to:
```typescript
const CORRECT_PASSWORD = "iloveyou2024";
```

## How It Works

- When someone visits your website, they'll see a blurred version of the content
- A password input form appears in the center
- After entering the correct password, the blur disappears and the full website is revealed
- The password is case-sensitive, so "pallaqinka me keqap" is different from "Pallaqinka Me Keqap"

## Security Note

⚠️ **Important**: This is a simple client-side password protection, which means:
- The password is stored in the browser code
- Someone technical could find it by viewing the source code
- This is perfect for casual privacy (keeping it from family/friends browsing)
- This is NOT secure for protecting highly sensitive information

For your use case (a romantic website between you and your partner), this level of protection is perfect! 💕

## Features

- ✅ Entire website is blurred when locked
- ✅ Beautiful lock screen with rose/pink theme
- ✅ Shake animation when wrong password is entered
- ✅ Error message for incorrect attempts
- ✅ Password input is hidden (shows dots instead of letters)
- ✅ Automatically focuses on the password field
- ✅ Press Enter to submit

## Testing

To test the password protection:
1. Save your changes
2. Refresh the browser (or restart the dev server)
3. You should see the blurred website with a lock screen
4. Enter the password and click "Unlock Our Story"
5. The website should unlock and display normally

## Removing Password Protection (Optional)

If you ever want to remove the password protection:

1. Open `/App.tsx`

2. Remove this import line:
   ```typescript
   import { PasswordProtection } from "./components/PasswordProtection";
   ```

3. Remove the `<PasswordProtection>` wrapper:
   - Delete: `<PasswordProtection>` (near the return statement)
   - Delete: `</PasswordProtection>` (at the end of the return statement)

4. Save the file

The website will then be publicly accessible without any password.
