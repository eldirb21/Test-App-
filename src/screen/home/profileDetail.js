import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import AcardDetail from '../../components/molecules/a-card-detail';

export default function ProfileDetail(props) {
  const [data, setdata] = useState([
    {
      code: 'PE',
      subject: 'Pekerjaan',
      desc: {
        name: 'Graphic Design',
        desc: 'Opinia',
        date: '(2008-Sekarang)',
      },
    },
    {
      code: 'PD',
      subject: 'Pendidikan',
      desc: {
        name: 'Design Engineering',
        desc: 'Politeknik Manufaktur negeri Bandung',
        date: '(2011-2013)',
      },
    },
    {
      code: 'TT',
      subject: 'Tempat Tinggal',
      desc: {
        name: 'Kota Bekasi',
        desc: '',
        date: '(2011-2013)',
      },
    },
    {
      code: 'HB',
      subject: 'Hobi',
      desc: {
        name: 'Musik',
        desc: '',
        date: '',
      },
    },
    {
      code: 'WS',
      subject: 'Website:',
      desc: {
        name: 'www.gdsagdsagdsa.com',
        desc: '',
        date: '',
      },
    },
  ]);
  return (
    <AContainer>
      <AappBar
        ongoBack={() => props.navigation.goBack()}
        textColor="#000"
        isNotLinear
        title=""
      />
      <AContent scroll ph>
        {data.map((item, index) => {
          return (
            <AcardDetail
              key={index}
              subject={item.subject}
              code={item.code}
              desc={item.desc}
            />
          );
        })}
      </AContent>
    </AContainer>
  );
}
