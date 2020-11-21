import React from 'react'
import ReactPaginate from 'react-paginate';
import { Pagination } from 'antd';

type propsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: ((page: number, pageSize?: number) => void)
  currentPage: number
}

const Paginatior: React.FC<propsType> = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages: Array<Number> = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (<div>

    <>
      <Pagination showQuickJumper defaultCurrent={1} total={props.totalUsersCount} onChange={props.onPageChanged} />
      <br />
      <Pagination showQuickJumper defaultCurrent={1} total={props.totalUsersCount} onChange={props.onPageChanged} />
    </>

    {/* <ReactPaginate
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
      // @ts-ignore
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      disabledClassName={'hidden'}
      nextLinkClassName={'btn'}
      previousLinkClassName={'btn'}
      pageClassName={'pages'}
    /> */}

  </div>
  )
}




export default Paginatior

