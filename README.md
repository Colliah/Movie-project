# Movie Project

Ứng dụng React/Vite sử dụng API của KKPhim.

## Cấu hình

Sao chép `.env.example` thành `.env` và thay đổi URL nếu cần. Vite chỉ nạp biến môi trường có tiền tố `VITE_`.

```env
VITE_KKPHIM_API_URL=https://phimapi.com/v1/api
VITE_KKPHIM_IMAGE_URL=https://phimapi.com/uploads/movies
```

## Chạy dự án

```bash
npm install
npm run dev
```

## Ghi chú Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
