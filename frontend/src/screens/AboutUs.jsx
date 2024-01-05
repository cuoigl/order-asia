import React from "react";
import { Container, Image } from "react-bootstrap";

import gioithieu1 from "../assets/gioithieu1.jpg";
import gioithieu2 from "../assets/gioithieu2.jpg";

export const AboutUs = () => {
  return (
    <Container>
      <h4>ASIABUY - Công ty mua hộ, vận chuyển hàng hóa Trung Quốc uy tín.</h4>
      <p>
        ASIABUY là một công ty chuyên cung cấp dịch vụ mua hộ, uỷ thác, vận
        chuyển hàng hóa Trung Quốc uy tín với nhiều năm kinh nghiệm. Chúng tôi
        cung cấp cho khách hàng dịch vụ mua hộ, vận chuyển hàng hóa từ Trung
        Quốc về Việt Nam nhanh chóng, thuận tiện, an toàn và giá cả cạnh tranh
        với hệ thống kho bải trên toàn quốc: Hà Nội, Hải Phòng, Đà Nẵng, TP.HCM.
      </p>

      <h5>Dịch vụ mua hộ hàng hóa Trung Quốc tại ASIABUY bao gồm:</h5>
      <ul>
        <li>
          Mua hộ hàng hóa TRUNG QUỐC theo yêu cầu của khách hàng, thương lượng
          giá tận xưởng.
        </li>
        <li>Mua hộ hàng hóa số lượng lớn với đa dạng mặt hàng.</li>
        <li>Nhận uỷ thác tất cả các mặc hàng Trung Quốc về Việt Nam.</li>
        <li>
          Mua hộ hàng hóa từ các sàn thương mại điện tử Trung Quốc như Taobao,
          1688, Tmall,...
        </li>
      </ul>

      <h5>Dịch vụ vận chuyển hàng hóa Trung Quốc tại ASIABUY bao gồm:</h5>
      <ul>
        <li>Vận chuyển hàng hóa bằng đường biển: 10 - 14 ngày.</li>
        <li>Vận chuyển hàng hóa bằng đường bộ: 5 - 10 ngày.</li>
      </ul>

      <div>
        <Image src={gioithieu1} rounded />
        <Image
          className="ms-1"
          style={{ width: "450px" }}
          src={gioithieu2}
          rounded
        />
      </div>

      <h5>Lợi thế của chúng tôi:</h5>
      <ul>
        <li>
          Đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm, am hiểu thị trường
          Trung Quốc.
        </li>
        <li>Hệ thống kho bãi hiện đại, rộng rãi tại Trung Quốc và Việt Nam.</li>
        <li>
          Quy trình mua hộ hàng hóa chuyên nghiệp, hợp đồng, phiếu thu đầy đủ
          minh bạch.
        </li>
        <li>Giá cả cạnh tranh, nhiều ưu đãi hấp dẫn.</li>
        <li>
          Dịch vụ chăm sóc khách hàng tận tình, thân thiện hoạt động 24/7.
        </li>
        <li>Giao hàng tận kho/ tận tay khách hàng.</li>
      </ul>

      <p>
        Liên hệ với ASIABUY để được tư vấn và hỗ trợ mua hộ hàng hóa Trung Quốc
        ngay hôm nay!
      </p>
      <p>
        Địa chỉ văn phòng: 110 Ngũ Hành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn,
        Thành phố Đà Nẵng, Vietnam. <br />
        Hotline: 0796 690 609 <br />
        Giám đốc: 0933 244 852 (Ms.Thoan)
        <br />
        P.kinh doanh: 0934 095 782 (Mis.Huệ)
        <br /> Gmail: asiabuy.logistics01@gmail.com.
        <br />
        Mã số thuế: 0402217588
      </p>
    </Container>
  );
};
