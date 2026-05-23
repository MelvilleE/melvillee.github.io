import React from 'react';

interface ClassificationBadgeProps {
    classification: string;
}

const ClassificationBadge: React.FC<ClassificationBadgeProps> = ({ classification }) => {
    const getBadgeColor = (classification: string) => {
        switch (classification) {
            case 'Premium':
                return 'bg-green-500 text-white';
            case 'Standard':
                return 'bg-blue-500 text-white';
            case 'Basic':
                return 'bg-yellow-500 text-black';
            default:
                return 'bg-gray-300 text-black';
        }
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(classification)}`}>
            {classification}
        </span>
    );
};

export default ClassificationBadge;