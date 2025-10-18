// EmailJS status helper functions
export const getEmailjsStatus = () => {
  const hasServiceId = !!import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const hasTemplateId = !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const hasPublicKey = !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return {
    isConfigured: hasServiceId && hasTemplateId && hasPublicKey,
    missing: {
      serviceId: !hasServiceId,
      templateId: !hasTemplateId,
      publicKey: !hasPublicKey,
    }
  };
};

export const getConfigurationMessage = () => {
  const status = getEmailjsStatus();
  
  if (status.isConfigured) {
    return null;
  }

  const missingItems = Object.entries(status.missing)
    .filter(([, isMissing]) => isMissing)
    .map(([key]) => key);

  return `Email service requires configuration. Missing: ${missingItems.join(', ')}. Please check the EMAILJS_SETUP.md file for instructions.`;
};