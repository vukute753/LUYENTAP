
import path from 'path';  // Nhập module path
import { fileURLToPath } from 'url'; // Import để xử lý __dirname trong ES6

const __filename = fileURLToPath(import.meta.url); // Lấy đường dẫn tệp hiện tại
const __dirname = path.dirname(__filename);       // Lấy thư mục chứa tệp

const viewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'src', 'resources', 'views'));  // Đặt đường dẫn đến thư mục views
};
export default viewEngine