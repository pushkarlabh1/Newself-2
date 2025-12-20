import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'focus:ring-blue-500',
        secondary: 'focus:ring-gray-500',
      },
      size: {
        small: 'px-3 py-2',
        medium: 'px-4 py-3',
        large: 'px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Required parameters with defaults
  placeholder = "free medication delivery",
  text_font_size = "18",
  text_font_family = "Satoshi",
  text_font_weight = "500",
  text_line_height = "25px",
  text_text_align = "center",
  text_color = "#ebf5e8",
  fill_background_color = "#254c44",
  border_border_radius = "20px",
  
  // Optional parameters (no defaults)
  border_border,
  layout_gap,
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  type = "text",
  name,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Map style values to Tailwind or use direct values
  const fontSize = text_font_size === "18" ? "text-xl" : `text-[${text_font_size}px]`;
  const fontWeight = text_font_weight === "500" ? "font-medium" : `font-[${text_font_weight}]`;
  const lineHeight = text_line_height === "25px" ? "leading-4xl" : `leading-[${text_line_height}]`;
  const textAlign = text_text_align === "center" ? "text-center" : `text-${text_text_align}`;
  const textColor = text_color === "#ebf5e8" ? "text-neutral-sageLight" : `text-[${text_color}]`;
  const backgroundColor = fill_background_color === "#254c44" ? "bg-primary-background" : `bg-[${fill_background_color}]`;
  const borderRadius = border_border_radius === "20px" ? "rounded-xl" : `rounded-[${border_border_radius}]`;

  // Handle border
  const borderClass = hasValidBorder 
    ? `border-[${border_border?.replace('1 solid ', '1px_solid_')}]`
    : 'border-0';

  // Build input styles
  const inputStyles = {
    fontFamily: text_font_family || 'Satoshi',
  };

  // Handle focus events
  const handleFocus = (event) => {
    setIsFocused(true);
    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (typeof onBlur === 'function') {
      onBlur(event);
    }
  };

  // Handle change event
  const handleChange = (event) => {
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        textColor,
        backgroundColor,
        borderClass,
        borderRadius,
        'placeholder:opacity-75',
        isFocused ? 'ring-2 ring-primary-light' : '',
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;