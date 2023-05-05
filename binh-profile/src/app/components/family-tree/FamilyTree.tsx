import {
  BORDER_BOX,
  BOX_PADDING,
  BOX_RATIO,
  BOX_SIZE,
  DIRECTION,
} from "@/lib/constants";
import { Family } from "@/lib/models/family-tree";
import TreeNode from "./TreeNode";

type Range = {
  [key: number]: {
    start: number;
    end: number;
  };
};

type Props = {
  range: Range;
  layers: number;
  root: Family;
  direction: typeof DIRECTION.HORIZONTAL | typeof DIRECTION.VERTICAL;
};

const FamilyTree = ({ range, root, layers, direction }: Props) => {
  function renderTreeVertical(
    localRange: Range,
    localRoot: Family
  ): JSX.Element {
    return (
      <div key={localRoot.id}>
        <div
          key={localRoot.id}
          className="absolute"
          style={{
            zIndex: 10,
            left: `${localRoot.layer * BOX_SIZE}px`,
            top: `${
              ((localRange[localRoot.id].start + localRange[localRoot.id].end) *
                BOX_SIZE) /
              2
            }px`,
          }}
        >
          <TreeNode people={localRoot.couple} />
        </div>
        {localRoot.layer > 1 && localRange[localRoot.parents] && (
          <div className="absolute">
            <svg
              height={localRange[1].end * BOX_SIZE}
              width={(layers + 2) * BOX_SIZE}
            >
              <line
                x1={localRoot.layer * BOX_SIZE + BOX_PADDING}
                y1={
                  ((localRange[localRoot.id].start +
                    localRange[localRoot.id].end) /
                    2) *
                    BOX_SIZE +
                  (BOX_SIZE * BOX_RATIO) / 2 +
                  BOX_PADDING +
                  BORDER_BOX * 1.5
                }
                x2={
                  (localRoot.layer - 1) * BOX_SIZE +
                  BOX_SIZE * BOX_RATIO +
                  BOX_PADDING +
                  BORDER_BOX * 2
                }
                y2={
                  ((localRange[localRoot.parents]?.start +
                    localRange[localRoot.parents]?.end) /
                    2) *
                    BOX_SIZE +
                  (BOX_SIZE * BOX_RATIO) / 2 +
                  BOX_PADDING +
                  BORDER_BOX * 1.5
                }
                stroke="black"
              />
            </svg>
          </div>
        )}
        {localRoot.children.map((child) => {
          return renderTreeVertical(localRange, child);
        })}
      </div>
    );
  }

  function renderTree(localRange: Range, localRoot: Family): JSX.Element {
    return (
      <div key={localRoot.id}>
        <div
          key={localRoot.id}
          className="absolute"
          style={{
            zIndex: 10,
            top: `${localRoot.layer * BOX_SIZE}px`,
            left: `${
              ((localRange[localRoot.id].start + localRange[localRoot.id].end) *
                BOX_SIZE) /
              2
            }px`,
          }}
        >
          <TreeNode people={localRoot.couple} />
        </div>
        {localRoot.layer > 1 && localRange[localRoot.parents] && (
          <div className="absolute">
            <svg
              width={localRange[1].end * BOX_SIZE}
              height={(layers + 2) * BOX_SIZE}
            >
              <line
                y1={localRoot.layer * BOX_SIZE + BOX_PADDING}
                x1={
                  ((localRange[localRoot.id].start +
                    localRange[localRoot.id].end) /
                    2) *
                    BOX_SIZE +
                  (BOX_SIZE * BOX_RATIO) / 2 +
                  BOX_PADDING +
                  BORDER_BOX * 1.5
                }
                y2={
                  (localRoot.layer - 1) * BOX_SIZE +
                  BOX_SIZE * BOX_RATIO +
                  BOX_PADDING +
                  BORDER_BOX * 2
                }
                x2={
                  ((localRange[localRoot.parents]?.start +
                    localRange[localRoot.parents]?.end) /
                    2) *
                    BOX_SIZE +
                  (BOX_SIZE * BOX_RATIO) / 2 +
                  BOX_PADDING +
                  BORDER_BOX * 1.5
                }
                stroke="black"
              />
            </svg>
          </div>
        )}
        {localRoot.children.map((child) => {
          return renderTree(localRange, child);
        })}
      </div>
    );
  }
  return (
    <div
      className={`relative overflow-auto`}
      style={
        direction === DIRECTION.HORIZONTAL
          ? {
              height: `${(layers + 2) * BOX_SIZE}px`,
              width: `${range[1].end * BOX_SIZE}px`,
            }
          : {
              width: `${(layers + 2) * BOX_SIZE}px`,
              height: `${range[1].end * BOX_SIZE}px`,
            }
      }
    >
      {direction === DIRECTION.HORIZONTAL
        ? renderTree(range, root)
        : renderTreeVertical(range, root)}
    </div>
  );
};

export default FamilyTree;
