import { useCallback, useMemo, useState } from 'react';
import type { GroupInfo, SelectedMap } from './TGroupInfo';

type UseGroupSelectionsOptions = {
  anyLabel?: string; // "상관없음" 라벨 커스텀
};

export function useGroupSelections(
  groupInfos: GroupInfo[],
  options: UseGroupSelectionsOptions = {}
) {
  const { anyLabel = '상관없음' } = options;
  const [selected, setSelected] = useState<SelectedMap>({});

  const toggle = useCallback(
    (groupName: string, value: string) => {
      const group = groupInfos.find((g) => g.groupName === groupName);
      const multiple = group?.multiple ?? false;

      setSelected((prev) => {
        const curr = prev[groupName] ?? [];

        if (value === anyLabel) {
          // any는 단독 선택
          return { ...prev, [groupName]: [anyLabel] };
        }

        // 일반 값 선택 시 any 제거
        const base = curr.filter((v) => v !== anyLabel);

        if (!multiple) {
          // 싱글: 같은 값이면 해제, 아니면 교체
          const isSame = base.length === 1 && base[0] === value;
          return { ...prev, [groupName]: isSame ? [] : [value] };
        }

        // 멀티: 토글
        const exists = base.includes(value);
        const next = exists ? base.filter((v) => v !== value) : [...base, value];
        return { ...prev, [groupName]: next };
      });
    },
    [anyLabel, groupInfos]
  );

  const setGroup = useCallback((groupName: string, values: string[]) => {
    setSelected((prev) => ({ ...prev, [groupName]: values }));
  }, []);

  const resetGroup = useCallback((groupName: string) => {
    setSelected((prev) => {
      if (!(groupName in prev)) return prev;
      const { [groupName]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const resetAll = useCallback(() => setSelected({}), []);

  const isGroupSelected = useCallback(
    (groupName: string) => (selected[groupName]?.length ?? 0) > 0,
    [selected]
  );

  const allGroupsSelected = useMemo(
    () => groupInfos.every((g) => (selected[g.groupName]?.length ?? 0) > 0),
    [groupInfos, selected]
  );

  const payload = useMemo(
    () => Object.entries(selected).map(([group, values]) => ({ group, values })),
    [selected]
  );

  return {
    selected,
    setSelected, // 필요 시 직접 세팅
    toggle,
    setGroup,
    resetGroup,
    resetAll,
    isGroupSelected,
    allGroupsSelected,
    payload,
    anyLabel,
  };
}
