export default {
  // Navbar
  "navbar.upload": "Upload",
  "navbar.signin": "Sign in",
  "navbar.home": "Home",
  "navbar.signup": "Sign up",

  "navbar.links.shares": "My shares",
  "navbar.links.reverse": "Reverse shares",

  "navbar.avatar.account": "My account",
  "navbar.avatar.admin": "Administration",
  "navbar.avatar.signout": "Sign out",
  // END navbar

  // /
  "home.title": "A <h>self-hosted</h> file sharing platform.",

  "home.description":
    "Do you really want to give your personal files in the hand of third parties like WeTransfer?",
  "home.bullet.a.name": "Self-Hosted",
  "home.bullet.a.description": "Host Pingvin Share on your own machine.",
  "home.bullet.b.name": "Privacy",
  "home.bullet.b.description":
    "Your files are yours and will never be accessed by third parties.",
  "home.bullet.c.name": "No annoying file size limit",
  "home.bullet.c.description":
    "Upload files as big as you want. Only your hard drive will be your limit.",

  "home.button.start": "Get started",
  "home.button.source": "Source code",
  // END /

  // /auth/signin
  "signin.title": "Welcome back",
  "signin.description": "You don't have an account yet?",
  "signin.button.signup": "Sign up",
  "signin.input.email-or-username": "Email or username",
  "signin.input.email-or-username.placeholder": "Your email or username",
  "signin.input.password": "Password",
  "signin.input.password.placeholder": "Your password",
  "signin.button.submit": "Sign in",
  "signIn.notify.totp-required.title": "Two-factor authentication required",
  "signIn.notify.totp-required.description":
    "Please enter your two-factor authentication code",
  "signIn.oauth.or": "OR",
  "signIn.oauth.signInWith": "Sign in with",
  "signIn.oauth.github": "GitHub",
  "signIn.oauth.google": "Google",
  "signIn.oauth.microsoft": "Microsoft",
  "signIn.oauth.discord": "Discord",
  "signIn.oauth.oidc": "OpenID",

  // END /auth/signin

  // /auth/signup
  "signup.title": "Create an account",
  "signup.description": "Already have an account?",
  "signup.button.signin": "Sign in",
  "signup.input.username": "Username",
  "signup.input.username.placeholder": "Your username",
  "signup.input.email": "Email",
  "signup.input.email.placeholder": "Your email",
  "signup.button.submit": "Let's get started",

  // END /auth/signup

  // /auth/totp
  "totp.title": "TOTP Authentication",
  "totp.button.signIn": "Sign in",

  // END /auth/totp

  // /auth/reset-password
  "resetPassword.title": "Forgot your password?",
  "resetPassword.description": "Enter your email to reset your password.",
  "resetPassword.notify.success":
    "A message with a link to reset your password has been sent if the provided email exists.",
  "resetPassword.button.back": "Back to sign in page",
  "resetPassword.text.resetPassword": "Reset password",
  "resetPassword.text.enterNewPassword": "Enter your new password",
  "resetPassword.input.password": "New password",
  "resetPassword.notify.passwordReset":
    "Your password has been successfully reset.",

  // /account
  "account.title": "My account",

  "account.card.info.title": "Account info",
  "account.card.info.username": "Username",
  "account.card.info.email": "Email",
  "account.notify.info.success": "Account updated successfully",

  "account.card.password.title": "Password",
  "account.card.password.old": "Old password",
  "account.card.password.new": "New password",
  "account.card.password.noPasswordSet":
    "You do not have a password set. To sign in using your email and password, you need to create a password.",
  "account.notify.password.success": "Password changed successfully",

  "account.card.oauth.title": "Social login",
  "account.card.oauth.github": "GitHub",
  "account.card.oauth.google": "Google",
  "account.card.oauth.microsoft": "Microsoft",
  "account.card.oauth.discord": "Discord",
  "account.card.oauth.oidc": "OpenID",
  "account.card.oauth.link": "Link",
  "account.card.oauth.unlink": "Unlink",
  "account.card.oauth.unlinked": "Unlinked",
  "account.modal.unlink.title": "Unlink account",
  "account.modal.unlink.description":
    "Unlinking your social accounts may cause you to lose your account if you don't remember your login credentials",
  "account.notify.oauth.unlinked.success": "Unlinked successfully",

  "account.card.security.title": "Security",
  "account.card.security.totp.enable.description":
    "Enter your current password to start enabling TOTP",
  "account.card.security.totp.disable.description":
    "Enter your current password to disable TOTP",
  "account.card.security.totp.button.start": "Start",
  "account.modal.totp.title": "Enable TOTP",
  "account.modal.totp.step1": "Step 1: Add your authenticator",
  "account.modal.totp.step2": "Step 2: Validate your code",
  "account.modal.totp.enterManually": "Enter manually",
  "account.modal.totp.code": "Code",
  "common.button.clickToCopy": "Click to copy",
  "account.modal.totp.verify": "Verify",
  "account.notify.totp.disable": "TOTP disabled successfully",
  "account.notify.totp.enable": "TOTP enabled successfully",

  "account.card.language.title": "Language",
  "account.card.language.description":
    "The project is translated by the community. Some languages might be incomplete.",
  "account.card.color.title": "Color scheme",

  // ThemeSwitcher.tsx
  "account.theme.dark": "Dark",
  "account.theme.light": "Light",
  "account.theme.system": "System",

  "account.button.delete": "Delete Account",
  "account.modal.delete.title": "Delete Account",
  "account.modal.delete.description":
    "Do you really want to delete your account including all your active shares?",
  // END /account

  // /account/shares
  "account.shares.title": "My shares",
  "account.shares.title.empty": "It's empty here 👀",
  "account.shares.description.empty": "You don't have any shares.",
  "account.shares.button.create": "Create one",

  "account.shares.info.title": "Share informations",
  "account.shares.table.id": "ID",
  "account.shares.table.name": "Name",
  "account.shares.table.description": "Description",
  "account.shares.table.visitors": "Visitors",
  "account.shares.table.expiresAt": "Expires on",
  "account.shares.table.createdAt": "Created on",
  "account.shares.table.size": "Size",
  "account.shares.table.password-protected": "Password protected",
  "account.shares.table.visitor-count": "{count} of {max}",
  "account.shares.table.expiry-never": "Never",

  "account.shares.modal.share-informations": "Share informations",
  "account.shares.modal.share-link": "Share link",

  "account.shares.modal.delete.title": "Delete share: {share}",
  "account.shares.modal.delete.description":
    "Do you really want to delete this share?",

  // END /account/shares

  // /account/reverseShares
  "account.reverseShares.title": "Reverse shares",
  "account.reverseShares.description":
    "A reverse share allows you to generate a unique URL that allows external users to create a share.",

  "account.reverseShares.title.empty": "It's empty here 👀",
  "account.reverseShares.description.empty":
    "You don't have any reverse shares.",

  // showCreateReverseShareModal.tsx
  "account.reverseShares.modal.title": "Create reverse share",
  "account.reverseShares.modal.expiration.label": "Expiration",
  "account.reverseShares.modal.expiration.minute-singular": "Minute",
  "account.reverseShares.modal.expiration.minute-plural": "Minutes",
  "account.reverseShares.modal.expiration.hour-singular": "Hour",
  "account.reverseShares.modal.expiration.hour-plural": "Hours",
  "account.reverseShares.modal.expiration.day-singular": "Day",
  "account.reverseShares.modal.expiration.day-plural": "Days",
  "account.reverseShares.modal.expiration.week-singular": "Week",
  "account.reverseShares.modal.expiration.week-plural": "Weeks",
  "account.reverseShares.modal.expiration.month-singular": "Month",
  "account.reverseShares.modal.expiration.month-plural": "Months",
  "account.reverseShares.modal.expiration.year-singular": "Year",
  "account.reverseShares.modal.expiration.year-plural": "Years",

  "account.reverseShares.modal.max-size.label": "Max share size",

  "account.reverseShares.modal.send-email": "Send email notifications",
  "account.reverseShares.modal.send-email.description":
    "Sends you an email notification when a share is created with this reverse share link.",

  "account.reverseShares.modal.simplified": "Simple mode",
  "account.reverseShares.modal.simplified.description":
    "Make it easy for the person uploading the file to share it with you. They will only be able to customize the name and description of the share.",

  "account.reverseShares.modal.public-access": "Public access",
  "account.reverseShares.modal.public-access.description":
    "Make the shares created with this reverse share public. If disabled, only you and the share creator will have access to view it.",

  "account.reverseShares.modal.max-use.label": "Max uses",
  "account.reverseShares.modal.max-use.description":
    "The maximum amount of times this URL can be used to create a share.",
  "account.reverseShare.never-expires": "This reverse share will never expire.",
  "account.reverseShare.expires-on":
    "This reverse share will expire on {expiration}.",

  "account.reverseShares.table.no-shares": "No shares created yet",
  "account.reverseShares.table.count.singular": "share",
  "account.reverseShares.table.count.plural": "shares",
  "account.reverseShares.table.shares": "Shares",
  "account.reverseShares.table.remaining": "Remaining uses",
  "account.reverseShares.table.max-size": "Max share size",
  "account.reverseShares.table.expires": "Expires at",

  "account.reverseShares.modal.reverse-share-link": "Reverse share link",

  "account.reverseShares.modal.delete.title": "Delete reverse share",
  "account.reverseShares.modal.delete.description":
    "Do you really want to delete this reverse share? If you do, the associated shares will be deleted as well.",

  // END /account/reverseShares

  // /admin
  "admin.title": "Administration",
  "admin.button.users": "User management",
  "admin.button.shares": "Share management",
  "admin.button.config": "Configuration",
  "admin.version": "Version",
  // END /admin

  // /admin/users
  "admin.users.title": "User management",
  "admin.users.table.username": "Username",
  "admin.users.table.email": "Email",
  "admin.users.table.admin": "Admin",

  "admin.users.edit.update.title": "Edit user: {username}",
  "admin.users.edit.update.admin-privileges": "Admin privileges",
  "admin.users.edit.update.change-password.title": "Change password",
  "admin.users.edit.update.change-password.field": "New password",
  "admin.users.edit.update.change-password.button": "Save new password",
  "admin.users.edit.update.notify.password.success":
    "Password changed successfully",

  "admin.users.edit.delete.title": "Delete user: {username} ?",
  "admin.users.edit.delete.description":
    "Do you really want to delete this user and all their shares?",

  // showCreateUserModal.tsx
  "admin.users.modal.create.title": "Create user",
  "admin.users.modal.create.username": "Username",
  "admin.users.modal.create.email": "Email",
  "admin.users.modal.create.password": "Password",
  "admin.users.modal.create.manual-password": "Set password manually",
  "admin.users.modal.create.manual-password.description":
    "If not checked, the user will receive an email with a link to set their password.",
  "admin.users.modal.create.admin": "Admin privileges",
  "admin.users.modal.create.admin.description":
    "If checked, the user will be able to access the admin panel.",

  // END /admin/users

  // /admin/shares
  "admin.shares.title": "Share management",
  "admin.shares.table.id": "Share ID",
  "admin.shares.table.username": "Creator",
  "admin.shares.table.visitors": "Visitors",
  "admin.shares.table.expires": "Expires on",

  "admin.shares.edit.delete.title": "Delete share: {id}",
  "admin.shares.edit.delete.description":
    "Do you really want to delete this share?",

  // END /admin/shares

  // /upload
  "upload.title": "Upload",

  "upload.notify.confirm-leave":
    "Are you sure you want to leave this page? Your upload will be canceled.",
  "upload.notify.generic-error":
    "An error occurred while finishing your share.",
  "upload.notify.count-failed": "{count} files failed to upload. Trying again.",
  "upload.reverse-share.error.invalid.title": "Invalid reverse share link",
  "upload.reverse-share.error.invalid.description":
    "This reverse share has expired or is invalid.",

  // Dropzone.tsx
  "upload.dropzone.title": "Upload files",
  "upload.dropzone.description":
    "Drag'n'drop files here. Maximum {maxSize}.",
  "upload.dropzone.notify.file-too-big":
    "Your files exceed the maximum share size of {maxSize}.",

  // FileList.tsx
  "upload.filelist.name": "Name",
  "upload.filelist.size": "Size",

  // showCreateUploadModal.tsx
  "upload.modal.title": "Create Share",
  "upload.modal.link.error.invalid":
    "Can only contain letters, numbers, underscores, and hyphens",
  "upload.modal.link.error.taken": "This link is already in use",
  "upload.modal.not-signed-in": "You're not signed in",
  "upload.modal.not-signed-in-description":
    "You will be unable to delete your share manually and view the visitor count.",

  "upload.modal.expires.never": "never",
  "upload.modal.expires.never-long": "Permanent share",
  "upload.modal.expires.error.too-long":
    "Expiration date exceeds the maximum of {max}.",

  "upload.modal.link.label": "Link",
  "upload.modal.expires.label": "Expiration",
  "upload.modal.expires.minute-singular": "Minute",
  "upload.modal.expires.minute-plural": "Minutes",
  "upload.modal.expires.hour-singular": "Hour",
  "upload.modal.expires.hour-plural": "Hours",
  "upload.modal.expires.day-singular": "Day",
  "upload.modal.expires.day-plural": "Days",
  "upload.modal.expires.week-singular": "Week",
  "upload.modal.expires.week-plural": "Weeks",
  "upload.modal.expires.month-singular": "Month",
  "upload.modal.expires.month-plural": "Months",
  "upload.modal.expires.year-singular": "Year",
  "upload.modal.expires.year-plural": "Years",

  "upload.modal.accordion.name-and-description.title": "Name and description",
  "upload.modal.accordion.name-and-description.name.placeholder": "Name",
  "upload.modal.accordion.name-and-description.description.placeholder":
    "Note for the recipients of this share",

  "upload.modal.accordion.email.title": "Email recipients",
  "upload.modal.accordion.email.placeholder": "Enter email recipients",
  "upload.modal.accordion.email.invalid-email": "Invalid email address",

  "upload.modal.accordion.security.title": "Security options",
  "upload.modal.accordion.security.password.label": "Password protection",
  "upload.modal.accordion.security.password.placeholder": "No password",
  "upload.modal.accordion.security.max-views.label": "Maximum views",
  "upload.modal.accordion.security.max-views.placeholder": "No limit",

  // showCompletedUploadModal.tsx
  "upload.modal.completed.never-expires": "This share will never expire.",
  "upload.modal.completed.expires-on":
    "This share will expire on {expiration}.",
  "upload.modal.completed.share-ready": "Share ready",
  "upload.modal.completed.notified-reverse-share-creator":
    "We have notified the creator of the reverse share. You can also manually share this link with them through other means.",

  // END /upload

  // /share/[id]
  "share.title": "Share {shareId}",
  "share.description": "Look what I've shared with you!",
  "share.fileCount":
    "{count, plural, =1 {# file} other {# files}} · {size} (zip file may be smaller due to compression)",
  "share.error.visitor-limit-exceeded.title": "Visitor limit exceeded",
  "share.error.visitor-limit-exceeded.description":
    "The visitor limit from this share has been exceeded.",
  "share.error.removed.title": "Share removed",
  "share.error.not-found.title": "Share not found",
  "share.error.not-found.description":
    "The share you're looking for doesn't exist.",
  "share.error.access-denied.title": "Private share",
  "share.error.access-denied.description":
    "The current account does not have permission to access this share",

  "share.modal.password.title": "Password required",
  "share.modal.password.description":
    "Please enter the password to access this share.",
  "share.modal.password": "Password",
  "share.modal.error.invalid-password": "Invalid password",

  "share.button.download-all": "Download all",
  "share.notify.download-all-preparing":
    "The share is being prepared. Please try again in a few minutes.",

  "share.modal.file-link": "File link",
  "share.table.name": "Name",
  "share.table.size": "Size",

  "share.modal.file-preview.error.not-supported.title": "Preview not supported",
  "share.modal.file-preview.error.not-supported.description":
    "Previews are not supported for this type of files. Please download the file to view it.",

  // END /share/[id]

  // /share/[id]/edit
  "share.edit.title": "Edit {shareId}",
  "share.edit.append-upload": "Append file",
  "share.edit.notify.generic-error":
    "An error occurred while finishing your share.",
  "share.edit.notify.save-success": "Share updated successfully",
  // END /share/[id]/edit

  // /imprint
  "imprint.title": "Imprint",
  // END /imprint

  // /privacy
  "privacy.title": "Privacy Policy",
  // END /privacy

  // /admin/config
  "admin.config.config-file-warning.title": "Configuration file present",
  "admin.config.config-file-warning.description":
    "As you have a configured Pingvin Share with a configuration file, you can't change the configuration through the UI.",

  "admin.config.title": "Configuration",
  "admin.config.category.general": "General",
  "admin.config.category.share": "Share",
  "admin.config.category.cache": "Cache",
  "admin.config.category.email": "Email",
  "admin.config.category.smtp": "SMTP",
  "admin.config.category.oauth": "Social Login",

  "admin.config.general.app-name": "App name",
  "admin.config.general.app-name.description": "Name of the application",
  "admin.config.general.app-url": "App URL",
  "admin.config.general.app-url.description":
    "On which URL Pingvin Share is available",
  "admin.config.general.secure-cookies": "Secure cookies",
  "admin.config.general.secure-cookies.description":
    "Whether to set the secure flag on cookies. If enabled, the site will not function when accessed over HTTP.",
  "admin.config.general.show-home-page": "Show home page",
  "admin.config.general.show-home-page.description":
    "Whether to show the home page",
  "admin.config.general.session-duration": "Session Duration",
  "admin.config.general.session-duration.description":
    "Time after which a user must log in again (default: 3 months).",
  "admin.config.general.logo": "Logo",
  "admin.config.general.logo.description":
    "Change your logo by uploading a new image. The image must be a PNG and should have the format 1:1.",
  "admin.config.general.logo.placeholder": "Pick image",

  "admin.config.cache.ttl": "TTL",
  "admin.config.cache.ttl.description":
    "Time in second to keep information inside the cache.",
  "admin.config.cache.max-items": "Maximum items",
  "admin.config.cache.max-items.description":
    "Maximum number of items inside the cache.",
  "admin.config.cache.redis-enabled": "Redis enabled",
  "admin.config.cache.redis-enabled.description":
    "Normally Pingvin Share caches information in memory. If you run multiple instances of Pingvin Share, you need to enable Redis caching to share the cache between the instances.",
  "admin.config.cache.redis-url": "Redis URL",
  "admin.config.cache.redis-url.description":
    "Url to connect to the Redis instance used for caching.",

  "admin.config.email.enable-share-email-recipients":
    "Enable email recipient sharing",
  "admin.config.email.enable-share-email-recipients.description":
    "Whether to allow email sharing with recipients. Only enable this if SMTP is activated.",
  "admin.config.email.share-recipients-subject": "Share recipients subject",
  "admin.config.email.share-recipients-subject.description":
    "Subject of the email which gets sent to the share recipients.",
  "admin.config.email.share-recipients-message": "Share recipients message",
  "admin.config.email.share-recipients-message.description":
    "Message which gets sent to the share recipients. Available variables:\n {creator} - The username of the creator of the share\n {creatorEmail} - The email of the creator of the share\n {shareUrl} - The URL of the share\n {desc} - The description of the share\n {expires} - The expiration date of the share\n These variables will be replaced with the actual value.",
  "admin.config.email.reverse-share-subject": "Reverse share subject",
  "admin.config.email.reverse-share-subject.description":
    "Subject of the sent email when someone created a share with your reverse share link.",
  "admin.config.email.reverse-share-message": "Reverse share message",
  "admin.config.email.reverse-share-message.description":
    "Message which gets sent when someone created a share with your reverse share link. {shareUrl} will be replaced with the creator's name and the share URL.",
  "admin.config.email.reset-password-subject": "Reset password subject",
  "admin.config.email.reset-password-subject.description":
    "Subject of the sent email when a user requests a password reset.",
  "admin.config.email.reset-password-message": "Reset password message",
  "admin.config.email.reset-password-message.description":
    "Message which gets sent when a user requests a password reset. {url} will be replaced with the reset password URL.",
  "admin.config.email.invite-subject": "Invite subject",
  "admin.config.email.invite-subject.description":
    "Subject of the sent email when an admin invites a user.",
  "admin.config.email.invite-message": "Invite message",
  "admin.config.email.invite-message.description":
    "Message which gets sent when an admin invites a user. {url} will be replaced with the invite URL, {email} with the email and {password} with the users password.",

  "admin.config.share.allow-registration": "Allow registration",
  "admin.config.share.allow-registration.description":
    "Whether registration is allowed",
  "admin.config.share.allow-unauthenticated-shares":
    "Allow unauthenticated shares",
  "admin.config.share.allow-unauthenticated-shares.description":
    "Whether unauthenticated users can create shares",
  "admin.config.share.max-expiration": "Max expiration",
  "admin.config.share.max-expiration.description":
    "Maximum share expiration. Set to 0 to allow unlimited expiration.",
  "admin.config.share.share-id-length": "Default share ID length",
  "admin.config.share.share-id-length.description":
    "Default length for the generated ID of a share. This value is also used to generate links for reverse shares. A value below 8 is not considered secure.",
  "admin.config.share.max-size": "Max size",
  "admin.config.share.max-size.description": "Maximum share size",
  "admin.config.share.zip-compression-level": "Zip compression level",
  "admin.config.share.zip-compression-level.description":
    "Adjust the level to balance between file size and compression speed. Valid values range from 0 to 9, with 0 being no compression and 9 being maximum compression. ",
  "admin.config.share.chunk-size": "Chunk size",
  "admin.config.share.chunk-size.description":
    "Adjust the chunk size for your uploads to balance efficiency and reliability according to your internet connection. Smaller chunks can enhance success rates for unstable connections, while larger chunks make uploads faster for stable connections.",
  "admin.config.share.auto-open-share-modal": "Auto open create share modal",
  "admin.config.share.auto-open-share-modal.description":
    "The share creation modal automatically appears when a user selects files, eliminating the need to manually click the button.",

  "admin.config.smtp.enabled": "Enable",
  "admin.config.smtp.enabled.description":
    "Whether SMTP is enabled. Only set this to true if you entered the host, port, email, user and password of your SMTP server.",
  "admin.config.smtp.host": "Host",
  "admin.config.smtp.host.description": "Host of the SMTP server",
  "admin.config.smtp.port": "Port",
  "admin.config.smtp.port.description": "Port of the SMTP server",
  "admin.config.smtp.email": "Email",
  "admin.config.smtp.email.description":
    "Email address from which the emails get sent",
  "admin.config.smtp.username": "Username",
  "admin.config.smtp.username.description": "Username of the SMTP server",
  "admin.config.smtp.password": "Password",
  "admin.config.smtp.password.description": "Password of the SMTP server",
  "admin.config.smtp.button.test": "Send test email",
  "admin.config.smtp.allow-unauthorized-certificates":
    "Trust unauthorized SMTP server certificates",
  "admin.config.smtp.allow-unauthorized-certificates.description":
    "Only set this to true if you need to trust self signed certificates.",

  "admin.config.oauth.allow-registration": "Allow registration",
  "admin.config.oauth.allow-registration.description":
    "Allow users to register via social login",
  "admin.config.oauth.ignore-totp": "Ignore TOTP",
  "admin.config.oauth.ignore-totp.description":
    "Whether to ignore TOTP when user using social login",
  "admin.config.oauth.disable-password": "Disable password login",
  "admin.config.oauth.disable-password.description":
    "Whether to disable password login\nMake sure that an OAuth provider is properly configured before activating this configuration to avoid being locked out.",
  "admin.config.oauth.github-enabled": "GitHub",
  "admin.config.oauth.github-enabled.description":
    "Whether GitHub login is enabled",
  "admin.config.oauth.github-client-id": "GitHub Client ID",
  "admin.config.oauth.github-client-id.description":
    "Client ID of the GitHub OAuth app",
  "admin.config.oauth.github-client-secret": "GitHub Client secret",
  "admin.config.oauth.github-client-secret.description":
    "Client secret of the GitHub OAuth app",
  "admin.config.oauth.google-enabled": "Google",
  "admin.config.oauth.google-enabled.description":
    "Whether Google login is enabled",
  "admin.config.oauth.google-client-id": "Google Client ID",
  "admin.config.oauth.google-client-id.description":
    "Client ID of the Google OAuth app",
  "admin.config.oauth.google-client-secret": "Google Client secret",
  "admin.config.oauth.google-client-secret.description":
    "Client secret of the Google OAuth app",
  "admin.config.oauth.microsoft-enabled": "Microsoft",
  "admin.config.oauth.microsoft-enabled.description":
    "Whether Microsoft login is enabled",
  "admin.config.oauth.microsoft-tenant": "Microsoft Tenant",
  "admin.config.oauth.microsoft-tenant.description":
    "Tenant ID of the Microsoft OAuth app\ncommon: Users with both a personal Microsoft account and a work or school account from Microsoft Entra ID can sign in to the application. organizations: Only users with work or school accounts from Microsoft Entra ID can sign in to the application.\nconsumers: Only users with a personal Microsoft account can sign in to the application.\ndomain name of the Microsoft Entra tenant or the tenant ID in GUID format: Only users from a specific Microsoft Entra tenant (directory members with a work or school account or directory guests with a personal Microsoft account) can sign in to the application.",
  "admin.config.oauth.microsoft-client-id": "Microsoft Client ID",
  "admin.config.oauth.microsoft-client-id.description":
    "Client ID of the Microsoft OAuth app",
  "admin.config.oauth.microsoft-client-secret": "Microsoft Client secret",
  "admin.config.oauth.microsoft-client-secret.description":
    "Client secret of the Microsoft OAuth app",
  "admin.config.oauth.discord-enabled": "Discord",
  "admin.config.oauth.discord-enabled.description":
    "Whether Discord login is enabled",
  "admin.config.oauth.discord-limited-users": "Discord limited users",
  "admin.config.oauth.discord-limited-users.description":
    "Limit signing in to specific users by their Discord ID. Leave it blank to disable.",
  "admin.config.oauth.discord-limited-guild": "Discord limited server ID",
  "admin.config.oauth.discord-limited-guild.description":
    "Limit signing in to users in a specific server. Leave it blank to disable.",
  "admin.config.oauth.discord-client-id": "Discord Client ID",
  "admin.config.oauth.discord-client-id.description":
    "Client ID of the Discord OAuth app",
  "admin.config.oauth.discord-client-secret": "Discord Client secret",
  "admin.config.oauth.discord-client-secret.description":
    "Client secret of the Discord OAuth app",
  "admin.config.oauth.oidc-enabled": "OpenID Connect",
  "admin.config.oauth.oidc-enabled.description":
    "Whether OpenID Connect login is enabled",
  "admin.config.oauth.oidc-discovery-uri": "OpenID Connect Discovery URI",
  "admin.config.oauth.oidc-discovery-uri.description":
    "Discovery URI of the OpenID Connect OAuth app",
  "admin.config.oauth.oidc-sign-out": "Sign out from OpenID Connect",
  "admin.config.oauth.oidc-sign-out.description":
    "Whether the “Sign out” button will sign out from the OpenID Connect provider",
  "admin.config.oauth.oidc-scope": "OpenID Connect scope",
  "admin.config.oauth.oidc-scope.description":
    "Scopes which should be requested from the OpenID Connect provider.",
  "admin.config.oauth.oidc-username-claim": "OpenID Connect username claim",
  "admin.config.oauth.oidc-username-claim.description":
    "Username claim in OpenID Connect ID token. Leave it blank if you don't know what this config is.",
  "admin.config.oauth.oidc-role-path": "Path to roles in OpenID Connect token",
  "admin.config.oauth.oidc-role-path.description":
    "Must be a valid JMES path referencing an array of roles. " +
    "Managing access rights using OpenID Connect roles is only recommended if no other identity provider is configured and password login is disabled. " +
    "Leave it blank if you don't know what this config is.",
  "admin.config.oauth.oidc-role-general-access":
    "OpenID Connect role for general access",
  "admin.config.oauth.oidc-role-general-access.description":
    "Role required for general access. Must be present in a user’s roles for them to log in. " +
    "Leave it blank if you don't know what this config is.",
  "admin.config.oauth.oidc-role-admin-access":
    "OpenID Connect role for admin access",
  "admin.config.oauth.oidc-role-admin-access.description":
    "Role required for administrative access. Must be present in a user’s roles for them to access the admin panel. " +
    "Leave it blank if you don't know what this config is.",
  "admin.config.oauth.oidc-client-id": "OpenID Connect Client ID",
  "admin.config.oauth.oidc-client-id.description":
    "Client ID of the OpenID Connect OAuth app",
  "admin.config.oauth.oidc-client-secret": "OpenID Connect Client secret",
  "admin.config.oauth.oidc-client-secret.description":
    "Client secret of the OpenID Connect OAuth app",

  "admin.config.category.ldap": "LDAP",
  "admin.config.ldap.enabled": "Enable LDAP",
  "admin.config.ldap.enabled.description":
    "Use LDAP authentication for user login",
  "admin.config.ldap.url": "Server URL",
  "admin.config.ldap.url.description": "URL of the LDAP server",
  "admin.config.ldap.bind-dn": "Bind DN",
  "admin.config.ldap.bind-dn.description":
    "Default user used to perform the user search",
  "admin.config.ldap.bind-password": "Bind password",
  "admin.config.ldap.bind-password.description":
    "Password used to perform the user search",
  "admin.config.ldap.search-base": "User base",
  "admin.config.ldap.search-base.description":
    "Base location, where the user search will be performed",
  "admin.config.ldap.search-query": "User query",
  "admin.config.ldap.search-query.description":
    "The user query will be used to search the 'User base' for the LDAP user. %username% can be used as the placeholder for the user given input.",
  "admin.config.ldap.admin-groups": "Admin group",
  "admin.config.ldap.admin-groups.description":
    "Group required for administrative access.",
  "admin.config.ldap.field-name-member-of": "User groups attribute name",
  "admin.config.ldap.field-name-member-of.description":
    "LDAP attribute name for the groups, an user is a member of. This is used when checking for the admin group.",
  "admin.config.ldap.field-name-email": "User email attribute name",
  "admin.config.ldap.field-name-email.description":
    "LDAP attribute name for the email of an user.",
  "admin.config.notify.success": "Configuration updated successfully.",
  "admin.config.notify.logo-success":
    "Logo updated successfully. It may take a few minutes to update on the website.",
  "admin.config.notify.no-changes": "No changes to save.",

  "admin.config.category.s3": "S3",
  "admin.config.s3.enabled": "Enabled",
  "admin.config.s3.enabled.description":
    "Whether S3 should be used to store the shared files instead of the local file system.",
  "admin.config.s3.endpoint": "Endpoint",
  "admin.config.s3.endpoint.description": "The URL of the S3 bucket.",
  "admin.config.s3.region": "Region",
  "admin.config.s3.region.description": "The region of the S3 bucket.",
  "admin.config.s3.bucket-name": "Bucket name",
  "admin.config.s3.bucket-name.description": "The name of the S3 bucket.",
  "admin.config.s3.bucket-path": "Path",
  "admin.config.s3.bucket-path.description":
    "The default path which should be used to store the files in the S3 bucket.",
  "admin.config.s3.key": "Key",
  "admin.config.s3.key.description":
    "The key which allows you to access the S3 bucket.",
  "admin.config.s3.secret": "Secret",
  "admin.config.s3.secret.description":
    "The secret which allows you to access the S3 bucket.",
  "admin.config.s3.use-checksum": "Use checksum",
  "admin.config.s3.use-checksum.description":
    "Turn off for backends that do not support checksum (e.g. B2).",

  "admin.config.category.legal": "Legal",
  "admin.config.legal.enabled": "Enable legal notices",
  "admin.config.legal.enabled.description":
    "Whether to show a link to imprint and privacy policy in the footer.",
  "admin.config.legal.imprint-text": "Imprint text",
  "admin.config.legal.imprint-text.description":
    "The text which should be shown in the imprint. Supports Markdown. Leave blank to link to an external imprint page.",
  "admin.config.legal.imprint-url": "Imprint URL",
  "admin.config.legal.imprint-url.description":
    "If you already have an imprint page you can link it here instead of using the text field.",
  "admin.config.legal.privacy-policy-text": "Privacy policy text",
  "admin.config.legal.privacy-policy-text.description":
    "The text which should be shown in the privacy policy. Supports Markdown. Leave blank to link to an external privacy policy page.",
  "admin.config.legal.privacy-policy-url": "Privacy policy URL",
  "admin.config.legal.privacy-policy-url.description":
    "If you already have a privacy policy page you can link it here instead of using the text field.",

  // 404
  "404.description": "Oops this page doesn't exist.",
  "404.button.home": "Bring me back home",

  // error
  "error.title": "Error",
  "error.description": "Oops!",
  "error.button.back": "Go back",
  "error.msg.default": "Something went wrong.",
  "error.msg.access_denied":
    "You canceled the authentication process, please try again.",
  "error.msg.expired_token":
    "The authentication process took too long, please try again.",
  "error.msg.invalid_token": "Internal Error",
  "error.msg.no_user": "User linked to this {0} account doesn't exist.",
  "error.msg.no_email": "Can't get email address from this {0} account.",
  "error.msg.already_linked":
    "This {0} account is already linked to another account.",
  "error.msg.not_linked":
    "This {0} account hasn't been linked to any account yet.",
  "error.msg.unverified_account":
    "This {0} account is unverified, please try again after verification.",
  "error.msg.user_not_allowed": "You are not allowed to sign in.",
  "error.msg.cannot_get_user_info":
    "Cannot get your user info from this {0} account.",
  "error.param.provider_github": "GitHub",
  "error.param.provider_google": "Google",
  "error.param.provider_microsoft": "Microsoft",
  "error.param.provider_discord": "Discord",
  "error.param.provider_oidc": "OpenID Connect",

  // Common translations
  "common.button.save": "Save",
  "common.button.create": "Create",
  "common.button.submit": "Submit",
  "common.button.delete": "Delete",
  "common.button.cancel": "Cancel",
  "common.button.confirm": "Confirm",
  "common.button.disable": "Disable",
  "common.button.share": "Share",
  "common.button.generate": "Generate",
  "common.button.done": "Done",
  "common.text.link": "Link",
  "common.text.navigate-to-link": "Visit link",
  "common.text.or": "or",
  "common.text.redirecting": "Redirecting...",
  "common.button.go-back": "Go back",
  "common.button.go-home": "Go home",
  "common.notify.copied": "Your link was copied to the clipboard",
  "common.notify.copied-link": "Your link was copied to the clipboard",
  "common.success": "Success",

  "common.error": "Error",
  "common.error.unknown": "An unknown error occurred",
  "common.error.invalid-email": "Invalid email address",
  "common.error.too-short": "Must be at least {length} characters",
  "common.error.too-long": "Must be at most {length} characters",
  "common.error.number-too-small": "Must be at least {min}",
  "common.error.number-too-large": "Must be at most {max}",
  "common.error.exact-length": "Must be exactly {length} characters",
  "common.error.invalid-number": "Must be a number",
  "common.error.field-required": "This field is required",
};
