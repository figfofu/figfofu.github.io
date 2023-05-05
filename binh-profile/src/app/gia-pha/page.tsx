"use client";

import { NhaOngDieu } from "@/lib/data/family-tree";
import { calRange, maxLayer, maxWidth } from "@/lib/utils/gia-pha";
import { useState } from "react";
import FamilyTree from "../components/family-tree/FamilyTree";
import { BOX_SIZE, DIRECTION } from "@/lib/constants";
import { Button } from "flowbite-react";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const GiaPha = () => {
  const [direction, setDirection] = useState(DIRECTION.HORIZONTAL);

  function onBtnClick(
    direction: typeof DIRECTION.HORIZONTAL | typeof DIRECTION.VERTICAL
  ) {
    setDirection(direction);
  }

  const root = NhaOngDieu;
  const maxHeight = maxLayer(root);
  const widthTrack = {};
  maxWidth(widthTrack, root);
  const range = {};
  calRange(widthTrack, range, root);
  return (
    <div
      className="h-full bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200"
      style={{
        minHeight: `${(maxHeight + 2) * BOX_SIZE}px`,
      }}
    >
      <div className="px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded">
        <div className="mx-auto flex flex-wrap items-center justify-between container">
          <div>
            <h1 className="py-2 font-bold">Gia Phả</h1>
            <div>
              <Button.Group>
                <Button
                  color={
                    direction === DIRECTION.HORIZONTAL ? "failure" : "gray"
                  }
                  onClick={() => onBtnClick(DIRECTION.HORIZONTAL)}
                  outline={false}
                >
                  <ArrowDownIcon className="w-6 g-6" />
                </Button>
                <Button
                  color={direction === DIRECTION.VERTICAL ? "failure" : "gray"}
                  onClick={() => onBtnClick(DIRECTION.VERTICAL)}
                >
                  <ArrowRightIcon className="w-6 g-6" />
                </Button>
              </Button.Group>
            </div>
          </div>
        </div>
      </div>
      <div className="relative m-auto flex justify-center">
        <FamilyTree
          root={root}
          range={range}
          layers={maxHeight}
          direction={direction}
        />
      </div>
    </div>
  );
};

export default GiaPha;
