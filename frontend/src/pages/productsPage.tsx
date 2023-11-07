import { Carousel, Col, Row } from "antd";
import Products, { Categories } from "../componant/common/products";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  let category = searchParams.get("category");

  return (
    <section className="m-5 bg-gray-300 p-10">
      <Carousel autoplay>
      <div>
          <img
            className="h-80 w-full object-contain"
            src="/temp/cover.png"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} />
        </div>
        <div>
          <img
            className="h-80 w-full object-contain"
            src="/temp/i.png"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />
        </div>
        <div>
          <img
            className="h-80 w-full object-contain"
            src="/temp/DJ.png"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />
        </div>
        <div>
          <img
            className="h-80 w-full object-contain"
            src="/temp/item.png"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />
        </div>
        <div>
          <img
            className="h-80 w-full object-contain"
            src="/temp/stage.png"
            style={{ display: "block", margin: "0 auto",maxWidth: "75vw",width: "100%",height: "35vw",objectFit: "cover"}} 
          />
        </div>
      </Carousel>
      <Row justify={"space-between"}>
        <Col>
          <div className="text-xl font-bold">Products</div>
        </Col>
        <Col>
          <Search
            placeholder="input search text"
            onSearch={(e) => setSearchText(e)}
            style={{ width: 200 }}
          />
        </Col>
      </Row>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <Row gutter={10} className="mb-4">
        {Object.values(Categories)
          .filter((e) => typeof e == "string")
          .map((e) => (
            <Col key={e}>
              <div
                onClick={() => {
                  const cat =
                    Object.values(Categories)
                      .filter((e) => typeof e == "string")
                      .indexOf(`${e}`) + 1;
                  if (cat == Number(category)) searchParams.delete("category");
                  else searchParams.set("category", cat.toString());
                  setSearchParams(searchParams);
                }}
                className={
                  `border rounded p-2 cursor-pointer mb-1 ` +
                  (Number(category) <= 4 &&
                  Number(category) >= 1 &&
                  Categories[Number(category) - 1] == e
                    ? "bg-blue-200"
                    : "bg-gray-200")
                }
              >
                {e}
              </div>
            </Col>
          ))}
      </Row>
      <Products
        search={searchText}
        category={
          Number(category) <= 4 && Number(category) >= 1
            ? Number(category)
            : undefined
        }
      />
    </section>
    
  );
  
};

export default ProductsPage;
