import { Family } from "../models/family-tree";


export function calCoordinates(familyRoot: Family) {
  familyRoot.children.forEach((child, index) => calCoordinates(child));
}

export function calRange(
  track: { [key: number]: number },
  range: {
    [key: number]: {
      start: number;
      end: number;
    };
  },
  familyRoot: Family
) {
  if (familyRoot.parents < 1) {
    range[familyRoot.id] = {
      start: 0,
      end: track[familyRoot.id],
    };
  }
  familyRoot.children.forEach((child, index) => {
    if (index === 0) {
      range[child.id] = {
        start: range[familyRoot.id].start,
        end: range[familyRoot.id].start + track[child.id] - 1,
      };
    } else {
      range[child.id] = {
        start: range[familyRoot.children[index - 1].id].end + 1,
        end: range[familyRoot.children[index - 1].id].end + track[child.id],
      };
    }
    calRange(track, range, child);
  });
}
export function maxWidth(
  track: { [key: number]: number },
  familyRoot: Family
): number {
  if (familyRoot.children.length === 0) {
    track[familyRoot.id] = 1;
    return 1;
  }
  if (track[familyRoot.id] > 0) {
    return track[familyRoot.id];
  }
  const width = familyRoot.children
    .map((c) => maxWidth(track, c))
    .reduce((a, b) => a + b, 0) as number;
  track[familyRoot.id] = width;
  return width;
}

export function maxLayer(familyRoot: Family): number {
  if (familyRoot.children.length === 0) {
    return 0;
  }
  return Math.max(...familyRoot.children.map(maxLayer)) + 1;
}
