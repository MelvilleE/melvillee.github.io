import React, { useState } from 'react';

const CompanySettings: React.FC = () => {
    const [logo, setLogo] = useState<File | null>(null);
    const [companyName, setCompanyName] = useState<string>('');
    const [preferences, setPreferences] = useState<{ [key: string]: any }>({});
    
    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setLogo(file);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(event.target.value);
    };

    const handlePreferenceChange = (key: string, value: any) => {
        setPreferences(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., API call to save settings)
        console.log('Company settings saved:', { logo, companyName, preferences });
    };

    return (
        <div className="company-settings">
            <h2>Company Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="logo">Company Logo:</label>
                    <input
                        type="file"
                        id="logo"
                        accept="image/*"
                        onChange={handleLogoChange}
                    />
                </div>
                <div>
                    <label>Preferences:</label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={preferences['emailNotifications'] || false}
                                onChange={(e) => handlePreferenceChange('emailNotifications', e.target.checked)}
                            />
                            Email Notifications
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={preferences['smsNotifications'] || false}
                                onChange={(e) => handlePreferenceChange('smsNotifications', e.target.checked)}
                            />
                            SMS Notifications
                        </label>
                    </div>
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default CompanySettings;