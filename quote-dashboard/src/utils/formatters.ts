export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const formatDate = (date: string | Date): string => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
};

export const formatQuoteStatus = (status: string): string => {
    switch (status) {
        case 'draft':
            return 'Draft';
        case 'sent':
            return 'Sent';
        case 'approved':
            return 'Approved';
        case 'rejected':
            return 'Rejected';
        default:
            return 'Unknown Status';
    }
};

export const formatProductName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};