import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const breadcrumbClasses = cva(
  'flex items-center text-sm',
  {
    variants: {
      variant: {
        primary: 'text-gray-700',
        secondary: 'text-gray-500',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

const BreadCrumb = ({
  // Optional parameters (no defaults)
  layout_justify_content,
  layout_align_items,
  layout_width,
  position,
  
  // Standard React props
  variant,
  className,
  items = [],
  separator = '/',
  maxItems,
  onItemClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidJustify = layout_justify_content && typeof layout_justify_content === 'string' && layout_justify_content?.trim() !== '';
  const hasValidAlign = layout_align_items && typeof layout_align_items === 'string' && layout_align_items?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Map layout properties to Tailwind classes
  const justifyClass = hasValidJustify ? {
    'start': 'justify-start',
    'center': 'justify-center',
    'end': 'justify-end',
    'spaceBetween': 'justify-between',
    'spaceAround': 'justify-around',
    'spaceEvenly': 'justify-evenly'
  }?.[layout_justify_content] || 'justify-start' : 'justify-start';

  const alignClass = hasValidAlign ? {
    'start': 'items-start',
    'center': 'items-center',
    'end': 'items-end',
    'stretch': 'items-stretch',
    'baseline': 'items-baseline'
  }?.[layout_align_items] || 'items-center' : 'items-center';

  // Build optional Tailwind classes
  const optionalClasses = [
    justifyClass,
    alignClass,
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Handle item click
  const handleItemClick = (item, index) => {
    if (typeof onItemClick === 'function') {
      onItemClick(item, index);
    }
  };

  // Handle max items display
  const displayItems = maxItems && items?.length > maxItems 
    ? [...items?.slice(0, 1), { label: '...', href: null }, ...items?.slice(-maxItems + 1)]
    : items;

  return (
    <nav
      className={twMerge(
        breadcrumbClasses({ variant }),
        optionalClasses,
        className
      )}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center space-x-2">
        {displayItems?.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                {separator}
              </span>
            )}
            
            {item?.href && item?.label !== '...' ? (
              <button
                onClick={() => handleItemClick(item, index)}
                className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded px-1 py-0.5 transition-colors"
                aria-current={index === displayItems?.length - 1 ? 'page' : undefined}
              >
                {item?.label}
              </button>
            ) : (
              <span 
                className={index === displayItems?.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-500'}
                aria-current={index === displayItems?.length - 1 ? 'page' : undefined}
              >
                {item?.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;