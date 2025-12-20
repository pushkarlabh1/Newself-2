import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-gray-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-gray-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Get started",
  text_font_size = "16",
  text_font_family = "DM Sans",
  text_font_weight = "400",
  text_line_height = "21px",
  text_text_align = "center",
  text_color = "#000000",
  fill_background_color = "#e9ff86",
  border_border = "1px solid #000000",
  border_border_radius = "24px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Map style values to Tailwind or use direct values
  const fontSize = text_font_size === "16" ? "text-lg" : `text-[${text_font_size}px]`;
  const fontWeight = text_font_weight === "400" ? "font-normal" : `font-[${text_font_weight}]`;
  const lineHeight = text_line_height === "21px" ? "leading-xl" : `leading-[${text_line_height}]`;
  const textAlign = text_text_align === "center" ? "text-center" : `text-${text_text_align}`;
  const textColor = text_color === "#000000" ? "text-text-primary" : `text-[${text_color}]`;
  const backgroundColor = fill_background_color === "#e9ff86" ? "bg-accent-highlight" : `bg-[${fill_background_color}]`;
  const borderRadius = border_border_radius === "24px" ? "rounded-2xl" : `rounded-[${border_border_radius}]`;

  // Parse border
  const borderClass = border_border?.includes("#000000") 
    ? "border border-border-primary" 
    : `border-[${border_border?.replace('1 solid ', '1px_solid_')}]`;

  // Build button styles
  const buttonStyles = {
    fontFamily: text_font_family || 'DM Sans',
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        textColor,
        backgroundColor,
        borderClass,
        borderRadius,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;