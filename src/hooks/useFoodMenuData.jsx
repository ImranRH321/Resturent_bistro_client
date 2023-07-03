import {useState, useEffect} from "react";

const useFoodMenuData = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [loadingMenuData, setLoadingMenuData] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setFoodMenu(data);
        setLoadingMenuData(false);
      });
  }, []);

  return [foodMenu ,loadingMenuData];
};

export default useFoodMenuData;
