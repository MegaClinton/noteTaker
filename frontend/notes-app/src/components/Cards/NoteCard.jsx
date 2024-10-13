import React from 'react';
import { MdOutlinePushPin } from 'react-icons/md';
import { MdCreate, MdDelete } from 'react-icons/md';

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className="relative"> {/* Keep NoteCard's parent container relative */}
      <div className="tv-frame fixed inset-0 z-[-1]"> {/* Add fixed positioning and place it behind the content */}
        {/* Your frame styles go here */}
      </div>

      <div className="border-[15px] border-blue-900 rounded-lg p-4 bg-white hover:shadow-xl transition-all ease-in-out">
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-sm font-medium">{title}</h6>
            <span className="text-xs text-slate-500">{date}</span>
          </div>

          <MdOutlinePushPin
            className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`}
            onClick={onPinNote}
          />
        </div>

        <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

        <div className="flex items-center justify-between mt-2">
          <div className="text-xs text-slate-500">{tags}</div>

          <div className="flex items-center gap-2">
            <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit} />
            <MdDelete className="icon-btn hover:text-red-500" onClick={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
