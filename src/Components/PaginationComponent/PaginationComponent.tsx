import {useSearchParams} from "react-router";
import './PaginationComponent.css'

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const currentPage =Number(searchParams.get('page')||'1');
    return (
        <div className="pagination">
           <button onClick={() =>{
               setSearchParams({page: String(currentPage + 1)})}}>
               Next
           </button>
           <button onClick={() =>{
               if(currentPage >1) {
                   setSearchParams({
                       page: String(currentPage - 1)
                   })
               }}}>
               Prev
           </button>
        </div>
    );
};