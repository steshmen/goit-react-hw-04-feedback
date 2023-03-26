import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
    return (
        <>
            <h2>{title}</h2>
            {children}
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}