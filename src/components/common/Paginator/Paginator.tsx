import React from 'react'
import ReactPaginate from 'react-paginate';


type propsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: ((pageNumber: number) => void)
  currentPage: number
}

const Paginatior: React.FC<propsType> = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages: Array<Number> = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (<div>

    <ReactPaginate
      previousLabel={'Previous page'}
      nextLabel={'Next page'}
      breakLabel={'...'}
      breakClassName={'pagesBreak'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      // @ts-ignore
      onPageChange={props.onPageChanged}
      containerClassName={'paginationUsers'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      disabledClassName={'hidden'}
      nextLinkClassName={'btn'}
      previousLinkClassName={'btn'}
      pageClassName={'pages'}
    />

  </div>
  )
}




export default Paginatior

