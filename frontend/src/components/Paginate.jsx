import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Paginate = ({
  pages,
  page,
  isAdmin = false,
  keyword = "",
  category = "",
}) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? category || keyword
                  ? category
                    ? `/categories/${category}/page/${x + 1}`
                    : `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};
