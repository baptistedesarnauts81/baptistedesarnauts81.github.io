import React from "react";

export default function BirthdayIcon({ size, color, ...otherProps }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={color}
      {...otherProps}
    >
      <path d='M16.84 24h-9.68l-3.16-8h16l-3.16 8zm-8.394-6h-1.505l1.58 4h6.958l1.58-4h-1.505l-1.554 3.48v-3.48h-1.223l-.777 3.48-.777-3.48h-1.223v3.48l-1.554-3.48zm2.554-11.936v-1.064h2v1.055c2.131.259 4.282 1.42 5.777 3.5 1.253.25 2.224 1.353 2.224 2.695 0 1.435-1.125 2.692-2.707 2.749-.131.002-12.455.002-12.586 0-1.606-.059-2.708-1.343-2.708-2.747 0-1.264.875-2.398 2.185-2.688 1.338-1.886 3.338-3.201 5.815-3.5zm1 1.936h-.13c-2.626.073-4.248 1.425-5.547 3.488-.185.004-.425-.003-.633.017-.366.046-.624.308-.678.615-.079.436.253.861.745.88.413.005 12.119.001 12.528 0 .977-.004.939-1.459-.041-1.5h-.581c-1.388-2.158-3.071-3.479-5.663-3.5zm-2.75 2.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm5.5 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm-2.75-1.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-.847-4.507c-1.897-.617-1.351-3.421.89-4.493.08 1.413 1.957 1.555 1.957 2.982 0 .598-.442 1.266-1.084 1.511.154-.506-.185-1.406-.88-1.797-.702.405-1.064 1.293-.883 1.797z' />
    </svg>
  );
}
