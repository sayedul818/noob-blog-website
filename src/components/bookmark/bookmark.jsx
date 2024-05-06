import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    return (
        <div className='w-full bg-gray-300 rounded-md my-4 p-2'>
            <h2>{bookmark.Title}</h2>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;