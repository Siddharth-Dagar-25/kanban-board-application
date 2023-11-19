import React from "react";
import { useSelector } from "react-redux";
import { LuTimer } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import "./Body.css";
import Card from "./Card";

const Body = () => {
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);

  // Function to get initials from a name
  const getInitials = (name) => {
    return name.split(' ').map(part => part[0].toUpperCase()).join('');
  };

  // Clone and sort the selectedData array
  const sortedData = selectedData
    ? [...selectedData].sort((a, b) => {
        const nameA = a[Object.keys(a)[0]].title;
        const nameB = b[Object.keys(b)[0]].title;
        return nameA.localeCompare(nameB);
      })
    : [];
    

  return (
    sortedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {sortedData.map((elem, index) => {
          const key = Object.keys(elem)[0];
          const userData = elem[key];

          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {!user ? (
                    <LuTimer />
                  ) : (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: "30px",
                        height: "30px",
                        display: 'inline-block',
                        borderRadius: '50%',
                        backgroundColor: '#666699', 
                        color: 'white',
                        textAlign: 'center',
                        marginRight: '5px',
                        lineHeight: '30px', 
                      }}
                    >
                      {getInitials(userData.title)}
                    </div>
                  )}
                  <span>
                    {userData.title} {userData.value?.length} 
                  </span>
                </div>
                <div className="rightView">
                  <AiOutlinePlus />
                  <HiDotsHorizontal />
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {userData.value?.map((item) => (
                  <Card key={item.id} id={item.id} title={item.title} tag={item.tag} userName={item.userName} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Body;
