import React from 'react';

const FilterLink = ({ filter, children, currentFilter, onClick }) => {
	if (filter === currentFilter) {
		return <span>{children}</span>;
	}
	return (
		<a
			href="#"
			onClick={e => {
				onClick(filter);
				e.preventDefault();
			}}
		>
			{children}
		</a>
	);
};

export default FilterLink;
