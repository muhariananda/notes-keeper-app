import React from "react";
import PropTypes from "prop-types";
import { MdArchive, MdUnarchive, MdDelete } from "react-icons/md";

const DetailPageAction = ({
  id,
  archived,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  const archiveActionTitle = archived ? "Pindahkan" : "Arsipkan";
  const handleArchiveClick = () => (archived ? onUnarchive(id) : onArchive(id));
  const handleDeleteClick = () => onDelete(id);

  return (
    <div className="detail-page__action">
      <button
        className="action"
        type="button"
        title={archiveActionTitle}
        onClick={handleArchiveClick}
      >
        {archived ? <MdUnarchive /> : <MdArchive />}
      </button>

      <button
        className="action"
        type="button"
        title="Hapus"
        onClick={handleDeleteClick}
      >
        <MdDelete />
      </button>
    </div>
  );
};

DetailPageAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default DetailPageAction;
