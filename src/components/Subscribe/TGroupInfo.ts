export type GroupInfo = {
  groupName: string;
  values: string[];
  multiple?: boolean; // 기본 false(싱글)로 가정
};

export type SelectedMap = Record<string, string[]>;

export const groupInfosData: GroupInfo[] = [
  { groupName: '지역', values: ['제주', '서귀포', '상관없음'] },
  { groupName: '학력', values: ['대학생', '졸업생', '상관없음'] },
  { groupName: '거주', values: ['제주도민', '이주민', '상관없음'] },
  { groupName: '관심사', values: ['취업/일자리', '자격증', '지원금'] },
];

export const groupInfosDataRequired: GroupInfo[] = [
  { groupName: '지역', values: ['제주', '서귀포'] },
  { groupName: '학력', values: ['대학생', '졸업생'] },
  { groupName: '거주', values: ['제주도민', '이주민'] },
  { groupName: '관심사', values: ['취업/일자리', '자격증', '지원금'] },
];

// 서버 스키마
export type ServerPayload = {
  education?: ('UNIVERSITY' | 'GRADUATED')[];
  region?: ('JEJU' | 'SEOGWIPO')[];
  residency?: ('NATIVE' | 'MIGRATION')[];
  interest?: ('EMPLOYMENT' | 'CERTIFICATION' | 'SUBSIDY')[];
};

// 그룹명(한글) → 서버 키
export const GROUP_KEY_MAP: Record<string, keyof ServerPayload> = {
  학력: 'education',
  지역: 'region',
  거주: 'residency',
  관심사: 'interest',
};

// 각 그룹별 값 매핑 (한글 → ENUM)
export const VALUE_MAP: Record<keyof ServerPayload, Record<string, string>> = {
  education: {
    대학생: 'UNIVERSITY',
    졸업생: 'GRADUATED',
    상관없음: 'NULL',
  },
  region: {
    제주: 'JEJU',
    서귀포: 'SEOGWIPO',
    상관없음: 'NULL',
  },
  residency: {
    제주도민: 'NATIVE',
    이주민: 'MIGRATION',
    상관없음: 'NULL',
  },
  interest: {
    '취업/일자리': 'EMPLOYMENT',
    자격증: 'CERTIFICATION',
    지원금: 'SUBSIDY',
  },
};
