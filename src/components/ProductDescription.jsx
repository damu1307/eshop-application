import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="text-center text-dark p-10">
      <div className="flex justify-center gap-20 border-b border-gray">
        <div
          onClick={() => handleTabClick(0)}
          className={`cursor-pointer ${
            activeTab === 0 ? "border-b-2 border-blue-500" : ""
          } xs:text-1rem sm:text-1.2rem md:text-1.6rem lg:text-2.4rem focus:outline-0`}
        >
          Description
        </div>
        <div
          onClick={() => handleTabClick(1)}
          className={`cursor-pointer ${
            activeTab === 1 ? "border-b-2 border-blue-500" : ""
          } xs:text-1rem sm:text-1.2rem md:text-1.6rem lg:text-2.4rem focus:outline-0`}
        >
          Specification
        </div>
        <div
          onClick={() => handleTabClick(2)}
          className={`cursor-pointer ${
            activeTab === 2 ? "border-b-2 border-blue-500" : ""
          } xs:text-1rem sm:text-1.2rem md:text-1.6rem lg:text-2.4rem focus:outline-0`}
        >
          Review
        </div>
      </div>

      <div className="sm:w-4/4 md:w-3/4 lg:w-2/4 m-auto xs:text-1rem sm:text-1.2rem md:text-1.6rem lg:text-1.8rem text-left pt-10">
        {activeTab === 0 && (
          <div>
            <p>
              The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around
              OLED TV we've tested. Although all OLEDs deliver similar
              fantastic picture quality, this one stands out for its value
              because it has many gaming-oriented features that are great for
              gamers.
            </p>
            <p className="py-10">
              *Only 65G2 is shown in the image for example purposes. All 2022
              LG OLED models feature eco-friendly packaging. **65C2 Stand model
              is at a minimum 39% lighter than the C1 series. ***The 'Reducing
              CO2' footprint label applies to 65C2 only. All other C2 models
              feature a 'CO2 Measured' label. ****UL ECV certification based on
              TV frame and back cover. Percentage of recycled content varies by
              model and size.More ...
            </p>
          </div>
        )}

        {activeTab === 1 && (
          <div>
            <p>
              Officiis Velit architecto quibusdam saepe, ipsam eveniet animi
              aut beatae, adipisci alias unde voluptatem deleniti aliquid harum
              voluptate voluptas. Porro debitis optio in?
            </p>
            <p className="py-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, expedita aut asperiores excepturi itaque aperiam
              aliquid amet sapiente ab eaque harum enim facere at? Doloribus
              maiores ipsam sequi, quibusdam id ut eaque repellendus dolore
              molestiae harum soluta! Dolore earum, quam soluta architecto cumque
              natus dignissimos veniam totam reprehenderit! Assumenda maiores
              omnis ipsa doloremque, vero veritatis voluptas! Repudiandae,
              officia quis natus, sed vitae amet omnis nobis nostrum non impedit
              voluptas quas exercitationem dolor! Cumque natus, temporibus alias
              ipsam optio sequi placeat repellat corporis voluptatem ab
              reiciendis labore quibusdam assumenda iste culpa consequuntur,
              distinctio nemo hic dolorum soluta, corrupti omnis. Optio, dolore?
            </p>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda temporibus et dolorum eius, repudiandae hic sunt alias
              natus impedit repellat voluptatem unde nesciunt quas quaerat
              aliquam facere perspiciatis magni accusamus nemo ex voluptatum
              iusto reiciendis eaque. Saepe vitae natus omnis unde ipsam, aut
              placeat hic enim consequuntur sequi architecto ea doloremque earum
              modi voluptatibus? Expedita illo nobis, soluta voluptatibus
              deserunt dolore tempora accusamus omnis laudantium unde maxime
              optio odit iusto libero, architecto maiores id iste veniam iure
              nostrum. Sunt doloribus distinctio porro inventore voluptatem?
              Repellendus, totam architecto sed accusamus officia veniam at nam
              facere iusto nulla asperiores nisi quae. Asperiores.
            </p>
            <p className="py-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, expedita aut asperiores excepturi itaque aperiam
              aliquid amet sapiente ab eaque harum enim facere at? Doloribus
              maiores ipsam sequi, quibusdam id ut eaque repellendus dolore
              molestiae harum soluta! Dolore earum, quam soluta architecto cumque
              natus dignissimos veniam totam reprehenderit! Assumenda maiores
              omnis ipsa doloremque, vero veritatis voluptas! Repudiandae,
              officia quis natus, sed vitae amet omnis nobis nostrum non impedit
              voluptas quas exercitationem dolor! Cumque natus, temporibus alias
              ipsam optio sequi placeat repellat corporis voluptatem ab
              reiciendis labore quibusdam assumenda iste culpa consequuntur,
              distinctio nemo hic dolorum soluta, corrupti omnis. Optio, dolore?
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
