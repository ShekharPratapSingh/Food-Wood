import { useEffect,useState } from 'react';

function useRestaurantMenu(resId) {
    const [resInfo, setresInfo] = useState(null);
    const [resDetail, setresDetail] = useState({});
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const res = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4867115&lng=88.35277119999999&restaurantId="+resId
        );
        const item = await res.json();
        const filterItem = item?.data?.cards.filter((itemFilter, index) => {
          return itemFilter.groupedCard;
        });
    
        setresDetail(item.data.cards[0].card.card.info);
        console.log("resDetail", resDetail);
        const data = filterItem[0].groupedCard.cardGroupMap.REGULAR.cards;
    
        const filteredData = data.filter((item, index) => {
          return item.card.card.itemCards;
        });
    
        const ItemCards = filteredData.map((data, index) => {
          return data.card.card.itemCards;
        });
        console.log("ItemCards",ItemCards)
    
        const ItemCardInfo = ItemCards.map((data, index) => {
          return data[index]?.card?.info;
        });
        console.log("ItemCardInfo",ItemCardInfo)
        const FilterItemCardInfo = ItemCardInfo.filter((item, index) => {
          return item !== undefined;
        });
    
        console.log(FilterItemCardInfo);
        setresInfo(FilterItemCardInfo);
      };
  return [resInfo,resDetail]
  
}

export default useRestaurantMenu