import { Family, FamilyTree, Person } from "../models/family-tree";

const LAYER_NHA_ONG_DIEU = 1;
const LAYER_NHA_ONG_DO = 2;
const LAYER_NHA_ONG_LUONG = 3;
const LAYER_NHA_ONG_UAN_CON = 4;

const OngDieu: Person = {
  id: 1,
  name: "Bùi Văn Điều",
  married: true,
  spouse: 2,
  gender: "M",
  birthday_year: 1930,
};

const BaDieu: Person = {
  id: 2,
  name: "Bùi Thị Điều",
  married: true,
  spouse: 1,
  gender: "F",
  birthday_year: 1930,
};

const OngDo: Person = {
  id: 3,
  name: "Bùi Xuân Độ",
  married: true,
  spouse: 4,
  gender: "M",
  birthday_year: 1950,
};

const BaDo: Person = {
  id: 4,
  name: "Bùi Thị Độ",
  married: true,
  spouse: 3,
  gender: "F",
  birthday_year: 1950,
};

const OngBa: Person = {
  id: 5,
  name: "Bùi Văn Ba",
  married: true,
  spouse: 6,
  gender: "M",
  birthday_year: 1958,
};

const BaBa: Person = {
  id: 6,
  name: "Trần Thị Hằng",
  married: true,
  spouse: 5,
  gender: "F",
  birthday_year: 1960,
};

const OngLuong: Person = {
  id: 7,
  name: "Bùi Văn Lượng",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 1985,
};

const OngUan: Person = {
  id: 8,
  name: "Bùi Văn Uẩn",
  married: true,
  spouse: 13,
  gender: "M",
  birthday_year: 1988,
};

const BaTuoi: Person = {
  id: 9,
  name: "Bùi Thị Tươi",
  married: true,
  spouse: -1,
  gender: "F",
  birthday_year: 1979,
};

const BaThu: Person = {
  id: 10,
  name: "Bùi Thị Anh Thư",
  married: true,
  spouse: 14,
  gender: "F",
  birthday_year: 1985,
};

const BaTrang: Person = {
  id: 11,
  name: "Bùi Thị Trang",
  married: true,
  spouse: 15,
  gender: "F",
  birthday_year: 1987,
};

const OngBinh: Person = {
  id: 12,
  name: "Bùi Đức Bình",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 1990,
};

const BaDuyen: Person = {
  id: 13,
  name: "Nguyễn Thị Duyên",
  married: true,
  spouse: 8,
  gender: "F",
  birthday_year: 1992,
};

const OngThuan: Person = {
  id: 14,
  name: "Ninh Văn Thuận",
  married: true,
  spouse: 10,
  gender: "M",
  birthday_year: 1981,
};

const OngThiet: Person = {
  id: 15,
  name: "Ngô Văn Thiết",
  married: true,
  spouse: 11,
  gender: "M",
  birthday_year: 1987,
};

const OngHung: Person = {
  id: 16,
  name: "Ninh Việt Hưng",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 2011,
};

const BaHuyen: Person = {
  id: 17,
  name: "Ninh Thu Huyền",
  married: false,
  spouse: -1,
  gender: "F",
  birthday_year: 2019,
};

const OngDung: Person = {
  id: 18,
  name: "Phạm Văn Dũng",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 1998,
};

const BaXuan: Person = {
  id: 19,
  name: "Phạm Thị Xuân",
  married: false,
  spouse: -1,
  gender: "F",
  birthday_year: 2000,
};

const OngConUan: Person = {
  id: 20,
  name: "Bùi Uẩn Con",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 2019,
};

const OngCong: Person = {
  id: 21,
  name: "Ngô Thành Công",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 2018,
};

const OngQuan: Person = {
  id: 22,
  name: "Ngô Văn Quân",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 2019,
};

const OngDo2: Person = {
  id: 23,
  name: "Bùi Xuân Đỗ",
  married: true,
  spouse: 24,
  gender: "M",
  birthday_year: 1952,
};
const BaOngDo2: Person = {
  id: 24,
  name: "Bùi Thị Đỗ",
  married: true,
  spouse: 23,
  gender: "M",
  birthday_year: 1952,
};

const OngPhong1: Person = {
  id: 26,
  name: "Bùi Văn Phong",
  married: true,
  spouse: -1,
  gender: "M",
  birthday_year: 1987,
};

const BaPhuong: Person = {
  id: 27,
  name: "Bùi Thị Phương",
  married: true,
  spouse: -1,
  gender: "F",
  birthday_year: 1984,
};

const OngPhong2: Person = {
  id: 28,
  name: "Bùi Văn Phòng",
  married: false,
  spouse: -1,
  gender: "M",
  birthday_year: 1990,
};

const BaMung: Person = {
  id: 25,
  name: "Bùi Thị Mừng",
  married: true,
  spouse: -1,
  gender: "F",
  birthday_year: 1960,
};

const OngMung: Person = {
  id: 29,
  name: "Bùi Văn Mừng",
  married: true,
  spouse: 25,
  gender: "M",
  birthday_year: 1960,
};

// Families

// Layer 3

const NhaBaMung: Family = {
  layer: LAYER_NHA_ONG_DO,
  id: 5,
  couple: [BaMung, OngMung],
  children: [],
  parents: 1,
};

const NhaOngPhong2: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 120,
  couple: [OngPhong2],
  children: [],
  parents: 4,
};

const NhaBaPhuong: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 119,
  couple: [BaPhuong],
  children: [],
  parents: 4,
};

const NhaOngPhong1: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 118,
  couple: [OngPhong1],
  children: [],
  parents: 4,
};

const NhaOngDo2: Family = {
  layer: LAYER_NHA_ONG_DO,
  id: 4,
  couple: [OngDo2, BaOngDo2],
  children: [NhaOngPhong1, NhaBaPhuong, NhaOngPhong2],
  parents: 1,
};

const NhaOngCong: Family = {
  layer: LAYER_NHA_ONG_UAN_CON,
  id: 115,
  couple: [OngCong],
  children: [],
  parents: 19,
};

const NhaOngQuan: Family = {
  layer: LAYER_NHA_ONG_UAN_CON,
  id: 116,
  couple: [OngQuan],
  children: [],
  parents: 19,
};

const NhaOngUanCon: Family = {
  layer: LAYER_NHA_ONG_UAN_CON,
  id: 114,
  couple: [OngConUan],
  children: [],
  parents: 15,
};

const NhaBaXuan: Family = {
  layer: LAYER_NHA_ONG_UAN_CON,
  id: 113,
  couple: [BaXuan],
  children: [],
  parents: 16,
};

const NhaOngDung: Family = {
  layer: LAYER_NHA_ONG_UAN_CON,
  id: 112,
  couple: [OngDung],
  children: [],
  parents: 16,
};

const NhaOngLuong: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 14,
  couple: [OngLuong],
  children: [],
  parents: 2,
};

const NhaOngUan: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 15,
  couple: [OngUan, BaDuyen],
  children: [NhaOngUanCon],
  parents: 2,
};

const NhaBaTuoi: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 16,
  couple: [BaTuoi],
  children: [NhaOngDung, NhaBaXuan],
  parents: 2,
};

const NhaOnBinh: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 17,
  couple: [OngBinh],
  children: [],
  parents: 3,
};

const NhaOngHung: Family = {
  layer: LAYER_NHA_ONG_UAN_CON,
  id: 110,
  couple: [OngHung],
  children: [],
  parents: 18,
};

const NhaBaHuyen: Family = {
  layer: LAYER_NHA_ONG_UAN_CON,
  id: 111,
  couple: [BaHuyen],
  children: [],
  parents: 18,
};

const NhaBaThu: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 18,
  couple: [BaThu, OngThuan],
  children: [NhaOngHung, NhaBaHuyen],
  parents: 3,
};

const NhaBaTrang: Family = {
  layer: LAYER_NHA_ONG_LUONG,
  id: 19,
  couple: [BaTrang, OngThiet],
  children: [NhaOngCong, NhaOngQuan],
  parents: 3,
};

// Layer 2

const NhaOngBa: Family = {
  layer: LAYER_NHA_ONG_DO,
  id: 3,
  couple: [OngBa, BaBa],
  children: [NhaOnBinh, NhaBaThu, NhaBaTrang],
  parents: 1,
};

export const NhaOngDo: Family = {
  layer: LAYER_NHA_ONG_DO,
  id: 2,
  couple: [OngDo, BaDo],
  children: [NhaOngLuong, NhaOngUan, NhaBaTuoi],
  parents: 1,
};

// Layer 1 / Root
export const NhaOngDieu: Family = {
  layer: LAYER_NHA_ONG_DIEU,
  id: 1,
  couple: [OngDieu, BaDieu],
  children: [NhaOngDo, NhaOngDo2, NhaOngBa, NhaBaMung],
  parents: 0,
};
