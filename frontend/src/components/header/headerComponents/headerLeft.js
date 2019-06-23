import React from "react";
import { Link } from "gatsby";

export default function HeaderLeft() {
  return (
    <div className="flex w-2/5 flex-shrink">
      <div className="relative w-full h-full flex justify-center items-center fill-current stroke-current text-blue-800">
        <Link to="/">
          <svg
            className="fill-current stroke-current text-blue-800 lg:w-full w-4/5"
            width="152px"
            height="41px"
            viewBox="0 0 152 41"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Page-1" stroke="none" strokeWidth="1">
              <g
                id="Desktop-HD"
                transform="translate(-791.000000, -929.000000)"
              >
                <g id="logo-7" transform="translate(791.000000, 929.000000)">
                  <path
                    d="M17.8079115,21.6402221 L17.8079115,18.8401632 C17.8079115,17.5474574 18.8556901,16.495325 20.143785,16.495325 C21.4324806,16.495325 22.4802593,17.5474574 22.4802593,18.8401632 L22.4802593,21.6402221 L17.8079115,21.6402221 Z M20.143785,13.0832809 C17.1464411,13.0832809 14.6819984,15.4046044 14.4326704,18.3493691 C14.4212553,18.4307662 14.4080379,18.5115603 14.4080379,18.5959721 L14.4080379,26.4438544 C14.4080379,27.3856485 15.1692395,28.149575 16.1082751,28.149575 C17.0467099,28.149575 17.8079115,27.3856485 17.8079115,26.4438544 L17.8079115,25.0522662 L22.4802593,25.0522662 L22.4802593,26.4438544 C22.4802593,27.3856485 23.2408601,28.149575 24.1798957,28.149575 C25.1189312,28.149575 25.8801328,27.3856485 25.8801328,26.4438544 L25.8801328,18.5959721 C25.8801328,18.5115603 25.8669154,18.4307662 25.8548996,18.3493691 C25.6055715,15.4046044 23.1417296,13.0832809 20.143785,13.0832809 L20.143785,13.0832809 Z"
                    id="Fill-35"
                  />
                  <path
                    d="M20.1439652,37.4207603 C10.9110166,37.4207603 3.3999336,29.8827897 3.3999336,20.6167897 C3.3999336,11.3507897 10.9110166,3.81281912 20.1439652,3.81281912 C29.3769138,3.81281912 36.8879968,11.3507897 36.8879968,20.6167897 C36.8879968,29.8827897 29.3769138,37.4207603 20.1439652,37.4207603 M20.1439652,0.400775 C9.0365502,0.400775 6.00790514e-05,9.46961324 6.00790514e-05,20.6167897 C6.00790514e-05,31.7639662 9.0365502,40.8328044 20.1439652,40.8328044 C31.2513802,40.8328044 40.2878704,31.7639662 40.2878704,20.6167897 C40.2878704,9.46961324 31.2513802,0.400775 20.1439652,0.400775"
                    id="Fill-36"
                  />
                  <path
                    d="M59.5126261,21.6402221 L59.5126261,18.8401632 C59.5126261,17.5474574 60.5604047,16.495325 61.8484996,16.495325 C63.1371953,16.495325 64.1849739,17.5474574 64.1849739,18.8401632 L64.1849739,21.6402221 L59.5126261,21.6402221 Z M61.8484996,13.0832809 C58.8511557,13.0832809 56.386713,15.4046044 56.137385,18.3493691 C56.12597,18.4307662 56.1127526,18.5115603 56.1127526,18.5959721 L56.1127526,26.4438544 C56.1127526,27.3856485 56.8739542,28.149575 57.8129897,28.149575 C58.7514245,28.149575 59.5126261,27.3856485 59.5126261,26.4438544 L59.5126261,25.0522662 L64.1849739,25.0522662 L64.1849739,26.4438544 C64.1849739,27.3856485 64.9455747,28.149575 65.8846103,28.149575 C66.8236458,28.149575 67.5848474,27.3856485 67.5848474,26.4438544 L67.5848474,18.5959721 C67.5848474,18.5115603 67.57163,18.4307662 67.5596142,18.3493691 C67.3102862,15.4046044 64.8464443,13.0832809 61.8484996,13.0832809 L61.8484996,13.0832809 Z"
                    id="Fill-37"
                  />
                  <path
                    d="M96.7663241,13.0835824 C95.1934545,13.0835824 93.7677787,13.7227 92.7302134,14.7549353 C91.693249,13.7227 90.2669723,13.0835824 88.6941028,13.0835824 C85.6967589,13.0835824 83.232917,15.4043029 82.9829881,18.3496706 C82.9715731,18.4304647 82.9583557,18.5118618 82.9583557,18.5962735 L82.9583557,26.4435529 C82.9583557,27.38595 83.7195573,28.1498765 84.6585929,28.1498765 C85.5976285,28.1498765 86.3582292,27.38595 86.3582292,26.4435529 L86.3582292,18.8404647 C86.3582292,17.5471559 87.4060079,16.4956265 88.6941028,16.4956265 C89.9827984,16.4956265 91.0305771,17.5471559 91.0305771,18.8404647 L91.0305771,23.0315088 C91.0305771,23.9739059 91.7911779,24.7378324 92.7302134,24.7378324 C93.669249,24.7378324 94.4304506,23.9739059 94.4304506,23.0315088 L94.4304506,18.8404647 C94.4304506,17.5471559 95.4782292,16.4956265 96.7663241,16.4956265 C98.054419,16.4956265 99.1021976,17.5471559 99.1021976,18.8404647 L99.1021976,26.4435529 C99.1021976,27.38595 99.8633992,28.1498765 100.802435,28.1498765 C101.74147,28.1498765 102.502071,27.38595 102.502071,26.4435529 L102.502071,18.5962735 C102.502071,18.5118618 102.489455,18.4304647 102.477439,18.3496706 C102.228111,15.4043029 99.7642688,13.0835824 96.7663241,13.0835824"
                    id="Fill-38"
                  />
                  <path
                    d="M79.7691794,23.0690118 C78.9569107,22.5969088 77.9163415,22.8760706 77.4465233,23.6912471 C77.0295747,24.4147765 76.2539542,24.8645706 75.4218593,24.8645706 C74.1337644,24.8645706 73.0859858,23.8124382 73.0859858,22.5197324 L73.0859858,18.8701294 C73.0859858,18.8689235 73.0865866,18.8677176 73.0865866,18.8665118 C73.0865866,17.5738059 74.1343652,16.5222765 75.4224601,16.5222765 C76.199883,16.5222765 76.9244364,16.9093647 77.3606103,17.5569235 C77.6892427,18.0453059 78.2251478,18.3081882 78.7706656,18.3081882 C79.0980964,18.3081882 79.429132,18.2135265 79.7211162,18.0157618 C80.4991399,17.4881882 80.7034087,16.4276147 80.177717,15.6468059 C79.1083099,14.0586588 77.3305708,13.1102324 75.4224601,13.1102324 C72.4449423,13.1102324 69.9919146,15.3996 69.7143494,18.3160265 C69.6993296,18.4076735 69.6861123,18.4999235 69.6861123,18.5957912 L69.6861123,23.0316294 C69.6861123,23.2336147 69.7275668,23.42535 69.7918514,23.6050265 C70.2995194,26.2615853 72.629385,28.2760118 75.4218593,28.2760118 C77.4627447,28.2760118 79.3666498,27.1744382 80.3891953,25.3999824 C80.8596142,24.5842029 80.582049,23.5411147 79.7691794,23.0690118"
                    id="Fill-39"
                  />
                  <path
                    d="M137.55994,22.9923779 C136.747671,22.5196721 135.707102,22.7994368 135.237284,23.6146132 C134.820335,24.3381426 134.044715,24.7879368 133.21262,24.7879368 C131.924525,24.7879368 130.876746,23.7358044 130.876746,22.4430985 L130.876746,18.7934956 C130.876746,18.7922897 130.877347,18.7910838 130.877347,18.7898779 C130.877347,17.4971721 131.925126,16.4456426 133.213221,16.4456426 C133.990643,16.4456426 134.715197,16.8327309 135.151371,17.4802897 C135.480003,17.9686721 136.015908,18.2315544 136.561426,18.2315544 C136.888857,18.2315544 137.219892,18.1368926 137.511877,17.9391279 C138.2899,17.4115544 138.494169,16.3509809 137.968477,15.5701721 C136.89907,13.982025 135.121331,13.0335985 133.213221,13.0335985 C130.235703,13.0335985 127.782675,15.3229662 127.50511,18.2393926 C127.49009,18.3310397 127.476873,18.4232897 127.476873,18.5197603 L127.476873,22.9549956 C127.476873,23.1569809 127.518327,23.3487162 127.582612,23.5283926 C128.09028,26.1849515 130.420145,28.1999809 133.21262,28.1999809 C135.253505,28.1999809 137.15741,27.0978044 138.179956,25.3233485 C138.650375,24.5075691 138.372809,23.4644809 137.55994,22.9923779"
                    id="Fill-40"
                  />
                  <path
                    d="M146.063829,24.7756971 C146.036794,24.7756971 146.01156,24.7823294 145.985126,24.7835353 C144.733679,24.7413294 143.727956,23.7090941 143.727956,22.4435206 L143.727956,18.7903 C143.727956,17.4975941 144.775734,16.4454618 146.063829,16.4454618 C146.841252,16.4454618 147.565806,16.83255 148.001979,17.4807118 C148.262723,17.8671971 148.399703,18.3200059 148.399703,18.7903 L148.399703,22.4314618 C148.399703,22.9011529 148.262723,23.3539618 148.001979,23.74105 C147.565806,24.3886088 146.841252,24.7756971 146.063829,24.7756971 M151.783956,18.3634176 C151.783355,18.3543735 151.782153,18.3453294 151.781553,18.3362853 C151.774944,18.2802118 151.773742,18.2217265 151.762327,18.1674618 C151.662596,17.2383294 151.344177,16.3501971 150.819086,15.5705941 C149.75028,13.9818441 147.972541,13.0334176 146.063829,13.0334176 C143.083908,13.0334176 140.629679,15.3264029 140.355719,18.2458441 C140.340699,18.3356824 140.328082,18.4255206 140.328082,18.5195794 L140.328082,22.9548147 C140.328082,23.1574029 140.368936,23.3485353 140.433821,23.5282118 C140.940889,26.1847706 143.270754,28.1998 146.063829,28.1998 C146.122707,28.1998 146.177979,28.1883441 146.235055,28.1823147 C148.077679,28.1274471 149.782122,27.1916824 150.819086,25.6511676 C151.249853,25.0108441 151.541236,24.2975647 151.687829,23.5487118 C151.75692,23.3630059 151.799576,23.1646382 151.799576,22.9548147 L151.799576,18.5195794 C151.799576,18.4659176 151.788762,18.4158735 151.783956,18.3634176"
                    id="Fill-41"
                  />
                  <path
                    d="M113.025878,18.4273294 L108.413609,18.4273294 C108.587839,17.3064618 109.553309,16.4454618 110.718843,16.4454618 C111.495665,16.4454618 112.220218,16.83255 112.656392,17.4807118 C112.849246,17.7665059 112.973609,18.0890794 113.025878,18.4273294 M115.473499,15.5699912 C114.404092,13.9818441 112.626353,13.0334176 110.718843,13.0334176 C107.686653,13.0334176 105.203586,15.4078 105.002321,18.4001971 C104.995111,18.4653147 104.982495,18.5292265 104.982495,18.5961529 L104.982495,23.0319912 C104.982495,23.2773882 105.036566,23.5101235 105.130289,23.7211529 C105.711254,26.2812412 107.993657,28.1998 110.718843,28.1998 C110.721246,28.1998 110.723649,28.1991971 110.726052,28.1991971 C112.763934,28.1961824 114.663633,27.0952118 115.685578,25.3231676 C116.155997,24.5079912 115.878432,23.4643 115.066163,22.9921971 C114.252692,22.5200941 113.213325,22.7986529 112.742906,23.6138294 C112.325357,24.3373588 111.549736,24.7871529 110.718843,24.7871529 C110.717641,24.7871529 110.71644,24.7877559 110.715238,24.7877559 C109.428345,24.7859471 108.382368,23.7350206 108.382368,22.4435206 L108.382368,21.8393735 L114.754353,21.8393735 C115.693388,21.8393735 116.45459,21.0754471 116.45459,20.13305 L116.45459,18.1716824 C116.45459,17.9214618 116.398115,17.6863147 116.301989,17.4722706 C116.143981,16.7969765 115.866416,16.1530353 115.473499,15.5699912"
                    id="Fill-42"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
