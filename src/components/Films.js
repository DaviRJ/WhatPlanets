import React from "react";

const Films = ({ films }) => (
    <div>
        <div className="text-center">
            <h5>Featured in {films.length} films</h5>
            <ul>{films.length > 0 ? <span>=)</span> : <span>=/</span>}</ul>
        </div>
    </div>
);

export default Films;
