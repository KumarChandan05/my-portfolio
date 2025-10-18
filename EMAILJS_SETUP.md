# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality in your portfolio.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Your Email Service

1. Go to the **Email Services** section in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. **Important**: Note down your **Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
To: {{to_name}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Important**: Note down your **Template ID** - you'll need this later

### Template Variables Explanation:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{subject}}` - Email subject from the form
- `{{message}}` - Email message from the form
- `{{to_name}}` - Your name (hardcoded in the component)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** in the API Keys section
3. **Important**: Note down your **Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=publickeyabc123
```

## Step 6: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section of your portfolio
3. Fill out and submit the contact form
4. Check your email to see if the message was received

## Security Notes

- ✅ The `.env` file is already included in `.gitignore`
- ✅ Environment variables are prefixed with `VITE_` for Vite compatibility
- ✅ Your EmailJS credentials will not be exposed in your repository
- ⚠️ Public keys are meant to be public, but keep service and template IDs secure

## Troubleshooting

### Common Issues:

1. **"Email service is not configured" error**
   - Check that all three environment variables are set in `.env`
   - Restart your development server after updating `.env`

2. **Form submission fails silently**
   - Check the browser console for error messages
   - Verify your EmailJS service is active and properly configured
   - Ensure your template ID matches exactly

3. **Emails not being received**
   - Check your spam folder
   - Verify the email template is correctly set up
   - Test sending emails directly from the EmailJS dashboard

4. **Template variables not working**
   - Ensure variable names in the template match exactly: `{{from_name}}`, `{{from_email}}`, etc.
   - Variables are case-sensitive

### Testing Checklist:

- [ ] EmailJS account created and verified
- [ ] Email service connected and active
- [ ] Email template created with correct variables
- [ ] All three environment variables set in `.env`
- [ ] Development server restarted after `.env` changes
- [ ] Contact form submits without errors
- [ ] Email received in your inbox

## Monthly Limits

EmailJS free tier includes:
- 200 emails per month
- EmailJS branding in emails

For higher limits and to remove branding, consider upgrading to a paid plan.

## Support

If you encounter issues:
1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Review the browser console for error messages
3. Test your configuration in the EmailJS dashboard
4. Ensure all environment variables are correctly set

---

Once configured, your contact form will automatically send emails to your specified email address whenever visitors submit the form!