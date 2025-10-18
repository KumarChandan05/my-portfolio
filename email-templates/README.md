# Email Templates for Portfolio Contact Form

This directory contains professional email templates designed to work with your EmailJS-powered contact form.

## 📧 Available Templates

### 1. Contact Form Template (`contact-form-template.html`)
**Purpose:** The main template you receive when someone contacts you through your portfolio.

**Features:**
- ✨ Professional design with gradient header
- 📱 Fully responsive design
- 📋 Organized contact information display
- 💬 Formatted message content
- 🔗 Quick reply button
- ⏰ Timestamp information

**EmailJS Variables Used:**
- `{{name}}` - Visitor's name
- `{{from_email}}` - Visitor's email address
- `{{subject}}` - Email subject from the form
- `{{message}}` - Email message content
- `{{date}}` - Date of submission (optional)
- `{{time}}` - Time of submission (optional)

### 2. Text Version (`contact-form-template.txt`)
**Purpose:** Plain text fallback version of the contact form template.

**Use Case:** 
- Fallback for email clients that don't support HTML
- Simpler, faster loading alternative
- Better accessibility for screen readers

### 3. Auto-Reply Template (`auto-reply-template.html`)
**Purpose:** Automatic response sent to visitors who contact you.

**Features:**
- 🎉 Friendly, welcoming tone
- ⏰ Sets response time expectations
- 📞 Provides alternative contact methods
- 🔗 Links to your social profiles
- ✅ Confirms message receipt

## 🚀 Setup Instructions

### Step 1: Choose Your Template
1. Copy the HTML content from the template you want to use
2. Go to your EmailJS dashboard
3. Navigate to Email Templates section

### Step 2: Create/Update EmailJS Template

#### For Main Contact Form Template:
1. Create a new template in EmailJS
2. Paste the HTML content from `contact-form-template.html`
3. Set the template variables:
   ```
   Subject: New Contact Form Submission - {{subject}}
   ```
4. Save and note the Template ID
5. Update your `.env` file with the new Template ID

#### For Auto-Reply Setup:
1. Create a second template in EmailJS
2. Paste the HTML content from `auto-reply-template.html`
3. Set up the subject line:
   ```
   Subject: Thank you for contacting me - {{subject}}
   ```
4. You'll need to modify your contact form to send two emails (see modification guide below)

### Step 3: Update Contact Form (For Auto-Reply)

To enable auto-replies, you'll need to modify your `Contact.jsx` component:

```javascript
// Add this after the main email is sent successfully
try {
    // Send main email to you
    await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId, // Your main template
        templateParams,
        emailjsConfig.publicKey
    );

    // Send auto-reply to visitor
    await emailjs.send(
        emailjsConfig.serviceId,
        'template_auto_reply_id', // Your auto-reply template ID
        {
            ...templateParams,
            to_email: formData.email, // Send to visitor
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        },
        emailjsConfig.publicKey
    );

    setSubmitStatus('success');
} catch (error) {
    // Handle errors
}
```

## 🎨 Customization Options

### Colors and Branding
The templates use a modern color scheme that matches your portfolio:
- **Primary:** `#667eea` (Purple-blue gradient)
- **Secondary:** `#764ba2` 
- **Success:** `#28a745` (Green for auto-reply)
- **Background:** `#f5f5f5`

### Modifying the Design
1. **Header Colors:** Update the `background: linear-gradient()` in the `.header` class
2. **Accent Colors:** Change `border-left` colors and button backgrounds
3. **Typography:** Modify font families in the `body` selector
4. **Layout:** Adjust padding and margins in respective classes

### Adding Your Logo
To add your logo to the email header:

```html
<div class="header">
    <img src="https://your-domain.com/logo.png" alt="Logo" style="max-width: 150px; margin-bottom: 15px;">
    <h1>New Contact Form Submission</h1>
    <p>Someone reached out through your portfolio website</p>
</div>
```

## 📱 Mobile Responsiveness

All templates include responsive design features:
- Flexible layouts for mobile devices
- Optimized font sizes for small screens
- Touch-friendly buttons and links
- Proper scaling for different screen sizes

## 🔧 Advanced Features

### Adding Analytics Tracking
You can add tracking pixels to monitor email opens:

```html
<!-- Add before closing </body> tag -->
<img src="https://your-analytics-service.com/track?email={{from_email}}" width="1" height="1" style="display:none;">
```

### Conditional Content
Use EmailJS conditional statements for dynamic content:

```html
{{#if urgent}}
<div style="background: #ff4757; color: white; padding: 10px; margin: 10px 0;">
    🚨 This message was marked as urgent!
</div>
{{/if}}
```

## 🎯 Best Practices

### Email Deliverability
1. **Avoid Spam Words:** Keep subject lines professional
2. **Text/HTML Ratio:** Always provide a text version
3. **Image Optimization:** Use web-optimized images
4. **Links:** Ensure all links are functional and secure

### User Experience
1. **Clear Call-to-Action:** Make reply buttons prominent
2. **Contact Information:** Always provide alternative contact methods
3. **Response Expectations:** Set clear response time expectations
4. **Professional Tone:** Maintain consistent, friendly communication

### Accessibility
1. **Alt Text:** Include alt text for all images
2. **Color Contrast:** Ensure sufficient contrast ratios
3. **Font Sizes:** Use readable font sizes (minimum 14px)
4. **Screen Readers:** Structure content with proper headings

## 🧪 Testing Your Templates

### EmailJS Template Testing
1. Use EmailJS's test feature in the dashboard
2. Send test emails to yourself
3. Check both HTML and text versions
4. Test on multiple email clients (Gmail, Outlook, Apple Mail)

### Cross-Client Testing
- **Gmail:** Web and mobile app
- **Outlook:** Desktop and web versions
- **Apple Mail:** macOS and iOS
- **Yahoo Mail:** Web interface
- **Mobile Clients:** Various smartphone email apps

## 📊 Template Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `{{name}}` | Visitor's full name | "John Doe" |
| `{{from_email}}` | Visitor's email | "john@example.com" |
| `{{subject}}` | Form subject line | "Project Inquiry" |
| `{{message}}` | Form message content | "I'd like to discuss..." |
| `{{date}}` | Submission date | "10/18/2025" |
| `{{time}}` | Submission time | "2:30 PM" |
| `{{to_name}}` | Your name (hardcoded) | "Chandan Kumar" |

## 🆘 Troubleshooting

### Common Issues

1. **Template not loading properly**
   - Check HTML syntax for errors
   - Ensure all CSS is inline or in `<style>` tags
   - Verify EmailJS variable syntax

2. **Images not displaying**
   - Use absolute URLs for all images
   - Ensure images are web-accessible
   - Consider hosting images on a CDN

3. **Mobile layout issues**
   - Test the `@media` queries
   - Check viewport meta tag
   - Verify responsive CSS rules

4. **Variables not substituting**
   - Check variable name spelling and case
   - Ensure variables match your form field names
   - Verify EmailJS template configuration

### Getting Help
- Check EmailJS documentation
- Test templates in the EmailJS dashboard
- Validate HTML using online validators
- Review browser console for JavaScript errors

## 🔄 Template Updates

To update your templates:
1. Modify the HTML files in this directory
2. Copy the updated content to EmailJS
3. Test the changes thoroughly
4. Update your template documentation

## 📝 License

These templates are part of your portfolio project and can be customized as needed for your specific requirements.

---

**Need help?** Feel free to modify these templates to match your brand and requirements. Remember to test thoroughly before deploying to production!