import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const useFoodMenuData = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [loadingMenuData, setLoadingMenuData] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setFoodMenu(data);
        setLoadingMenuData(false);
      });
  }, [user]);

  return [foodMenu, loadingMenuData];
};

export default useFoodMenuData;
