import { useEffect } from "react";
import { useAppSelector } from "../../hooks/ReduxHooks";

function Bookmarks() {
  const { bookmarks } = useAppSelector((state) => state.GlobalReducer);

  useEffect(() => {
    console.log(bookmarks);
  }, []);

  return <div>Bookmarks</div>;
}

export default Bookmarks;
