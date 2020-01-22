import React from "react";

const TasksPagination = ({ taskPerPage, totalTasks, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTasks / taskPerPage); i++) {

        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map(page => (
                <ul class="pagination">
                    <li key={page} class="waves-effect">
                        <a onClick={() => paginate(page)} href="#!">{page}</a>
                    </li>
                </ul>
            ))
            }
        </div>
    )
}


export default TasksPagination;