import { useEffect, useState } from 'react';
import { Button } from '@vapor-ui/core';
import { mockData } from './detailmock';
import type { TDetailCard } from '../../components/DetailCard/TDetailCard';
import DetailModal from '../../components/CardSwiper/Index';

function DetailModalTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<TDetailCard[]>(mockData);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const fetchDetailInfo = async (signal?: AbortSignal) => {
    try {
      const userId = encodeURIComponent(localStorage.getItem('userId') || '1');
      const baseUrl = import.meta.env.VITE_PUBLIC_API_URL;

      if (!baseUrl) {
        console.warn('VITE_PUBLIC_API_URL is not set. Falling back to mockData.');
        setItems(mockData);
        return;
      }

      const res = await fetch(`${baseUrl}/api/infos/me?userId=${userId}`, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      const list: unknown = (json && (json.data ?? json.results ?? json.items)) ?? json;
      const parsed = Array.isArray(list) ? (list as TDetailCard[]) : [];

      setItems(parsed.length > 0 ? parsed : mockData);
    } catch (err) {
      // fetch가 취소된 경우는 조용히 무시
      if ((err as any)?.name === 'AbortError') return;
      console.error('fetch error, fallback to mockData:', err);
      setItems(mockData);
    }
  };

  useEffect(() => {
    const ac = new AbortController();
    fetchDetailInfo(ac.signal);
    return () => ac.abort();
  }, []);

  const count = items.length > 0 ? items.length : mockData.length;

  return (
    <>
      <h2>흑도야지</h2>

      <Button onClick={handleOpenModal}>모달 열기 테스트 ({count}개 항목)</Button>

      {isModalOpen && <DetailModal data={items} selectedIndex={1} onClose={handleCloseModal} />}
    </>
  );
}

export default DetailModalTest;
