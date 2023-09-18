import Link from "next/link";

const ListItem = ({ title, url, id }) => {
  return (
    <div key={id} className="nav-item">
      <Link className="nav-item-text" href={url}>
        {title}
      </Link>
    </div>
  );
};

export default ListItem;
