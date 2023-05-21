var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    cards: [
//       {
//         title: "富永媛香",
//         su:"408736014",
//         cover:
//           "https://lh3.googleusercontent.com/fife/APg5EOZJM0JjMzdQeE6zjDEs-8nCbQIb7dIDVLrsX5DrgPApdbJBWaDbWGTEi83wkRl42Z8sj4B2D7D6R60N7LMdbJGlSFNx-y_Ee-T8AvRcbAqdGFkJVU7S4gLGsUlsPmGbwc1xy6rLauKFMvcamwSchnPekOftA78pQ_SM0gyaTKyOaNA4NiGYr0GUfoGSYJf5leDzRFJFD7_xoPVZ-O6oUEMJ0jO5d5u0_X4yAQ47QExTCQ7_MYHrCymwYVy1FeNC8rfoI89SRMRhKY3CgKFfAyhLwQhXlYKxxULDucUCVLbnkkjUa-IU0ptnHTDdiQsmlE-yGXPrEiXiVseSJ6uT44IYuqlSmmr38bmuaksBoaEykSfq2mxMITYYIEVIhp6VhnSYVEyCuEYcd0SEkm0I5mkLb7wH34y2984mzTOQRMxThptikwGEa_yviWQvxs_ionRw2CTURLJxKsqJEmhQpZpnlpT6AINg1P0FvHsH8cSaTXPrk4-JMTAcqTXWmEmTVX77X6WqRZNPvJiIhFLx7Tfa_hdSOd6ff-97vs9kFlLw95EnPW3pgbqcAG01F3kURLJbPblSEtJNB5uHFV17qFYGpZaiyiaYyqP5X9gps_vJw54Br4_cS7hquhMXjkRaX2ondUOK_Fz80IAfqUJqJTOMdLQK8fmTzNudPOE9hcEprFW1KKefgvY4o1E95U5Lq8D79f0cRFqvcBfr0aBLoV8diG1LXGLoTCY2Vo7OyiNaM_zxaXNwzO2V8ZidiRG1IUDmny6ffgb5SosdmgIBbloXpYzdMIp4pxGcVvuf1F6AzFGWjd9OqKoqU40D07HHvtiX4FH4iLqIrbGouxHj7jr9zyyuRtJZF7fZwfzDtYAEZ1lgfCuhxJMQtTGMZYw0_PuIvzbnXuoO8hYexbU1fTRLlhojx_WeJ8PWnULPdqf7x9qQaWF-zkCmbjXn-7MRjNyALUYyTfsl1XZTJqWB0dHcY3rFEa3IXLNmjiBiu7_yXNY0xoh7iaqVZtKWeZHYB8Q6WR-Wiw4sgbNqLCx5gxoixtISt8aAeoNnpsZadwXQ9T0N1xE_9yZVF1Ue5UdchbDPkgsZ-rIFVUvkS72b01hln-jKxgV7fxzf83OqJoAFgPUrYXP1aAyW62IXXuD0b6P2DhIikKeUCraLj2cU9RGSklyScFE-icnlcS8uR5K6lHHcCMi-eFjwY18IT8TatiuY2Fl7C1wEZ6ZP3cLZYJj0QzQ1bfsgTui0_Z-RBfcqqmB_D03cyFHLwth39DT1zeRlDfrwf3x3pAhEMTAqrLduLWwUq5L1ey2ufYy3BAnXs_XhOpimHUllcUCJmtz5IrVR3RN5BMhYHHSnlkF4GJizYv_G9Y_g5CtVYz374KpCl0Y2IGeyJezZIhSoLaTWAnYAAtHncRn1Z4r1nPhY00grCMWL4euyb8U4o2sFty_oFxSBhxoGmGJjDSUMYinNQSmMFUPXzroIJwRtcJjjPZIVfWUl=w1920-h892",
//         my1: "我的特色👍",
//         love1: "我喜歡多拉A夢,喜歡看動漫,看漫畫",
//         love: "非常喜歡看恐怖電影!!",
//         love2:"呪怨、IT、Halloween等々!(^^)!",
//         po1:"最近努力的事:",
//         po: "努力研究製作網頁、不要一直外賣自己煮飯!,早點睡!早點起床!",
//       },
      {
          my: "製作作品１",
          cover:
          "	https://lh3.google.com/u/0/d/1UpjPMPEGwfsNUO4Vgc_YA8ISoCMMuRl5=w1920-h892-iv1",
          my1: "畫畢業專題用的圖片",
          love1: "畫到70張以上(´；ω；`)",
          love: "我們畢業專題是AdobeXd製作的～",
      },
        {
          my: "製作作品２",
          cover:
            "https://lh3.googleusercontent.com/fife/APg5EOal9AoQLwlOsREb33Uk7LrrZbw3IqGyZC57cs8XfVeRg2BkzfFeWVDK5RfTqVThWSbaF3ckRqgId4805jkfltBUph1sKXD5oiGomQ_UGVTz-9P8b8ZBDlBVxkYUm8ppkxslCmwMAH3UXfOnlfU8mcf2rBsrEm7l_Dl4FM2QLbcugPO88whz_ZbjCITGlSkoywBI2QrUOu_R6ZpitKDgPWSCJaUPT4ooCLGtjdW4LBxW0BjFvRrxGVMJnL_PTxrLMA5-ymbFvxbX4TqZ7tHNNhqjw0pe8IdiKuCJfEfCrJiEOrMuCn7ZdLqk6kzM97HZ742dhiMFg1R0tiWl1RMhfUmhX9o_6x1-i3EKaWKx4jIpIezgZ1qQHWbvA4Z-jkvCM5PrnGjSjY_2FbbTn-hAwKQ49AGFW6JZofrls0VsYObFP0ID6XzPCEWnB51TCaKaxucltDTNoK172H2eYiWUL8MknsWGeTZ_7xVSmP96jhO2Gqv4LNF7Ei_-E_7YP-A_kLndReBtoCoNoyFG8g8U9_ZvibHzc3HGo1BKj_jTY_9zYYmi8YdgYgDDPGBGfwF3jkFbJrHzg-oI1-d4-fH_Qy5B4Nl39FzkP8I_98M5Oyt0f8MbOLpgx5MA9JNy03gZeS4_Cnvrk6a7KMmLCzjAm8NhEONLnK6RLgW9UeYJI34pJR7eIC10SnifS7jSxiomw7nxxQTU9nzFrdYiekZNZol9XGtY5bZ3l76sgBESJVK-ItESKvu6U7jbrW7ISj9uNm6X3FP1W_eTa_n1HJ4SAWzEcvisp76QHtKM36xMAvCtbJy8-koOD57s2Q3M6jS0P_GrvGDfrvz2DZBrqP-ZjU22r3X9rLsxQ3qjBu8_gfyWhP9QsJUp8eirmzxE9vaWy3Mkz2WD1fdNKZon1gpKiL6PbPZptl__UqvnRi-wFIa1nkQqyAG4m1H05QU-gbHPCPJ08DaEQdXs7zfljvqmoo10QKRsP27HVuB7P9vGamRkugFSyp3-ah1RU0MpY3kV4yDetu0T45GLOD5EmgenFAdVKaOS-eJM1jySQ9Xt4FJi6hr1Vy3PrvCaF42q9c1Y4dJN75dqVFmrTFORkMSR-7Otrn5U1VDs25iq7O-PByarfHRZ2dCr0wmGBNIWorFbROZwY8JDOlBkG4-B3V7Uheq_Jwwd-SUNBJ57RsNzYwNur0ErGfXE1BgkCBiPWPZvqU40aZNbs_rFLDksAIzzjDPLKi8Z7XVXk8T2cVdZnC5OvgYkJ3F3R7LrL6lVrhPg77oaa4fKhC7DbpoKeIYIVYen_jyNcypgJqnAvaWFUgRTrLKj78y0bZJLsrjPsxszIastFrBslrnwCWj_wZM5wpPy8upXN-7PjDYwtgPwd5_XFoNC17L5l-fmnCYypzwYQQIqhfDF-ZSPLMp5-gtHrLx9J5XA-MftuPvGRuvEK8na8kmOtDtnMSxdJDjXq5NpxHyjDtXnnX-pibEawqFqAn-idJYo=w1227-h892",
          my1:"製作動畫",
          po: "使用adobe premier pro 製作📹",
          url: "動畫網址",
          url2: "使用素材網頁",
        },
        {
         my: "製作作品3",
          cover:
            "https://lh3.googleusercontent.com/fife/APg5EOa_Zaoma9RaJdV0qYC1Zx9b-0eoL6UJFR0-M7PmH9Jv6dq647WRXeOwvkrDeeWTYEQ9sI8SCX0sUEs05jLNiel7e0NN4SzqItaJkKHqmX3nP_1GBSSqdaCba7fu9clJuRvWfaNuGKOGK1MrjJvOWloLhHvcsnaHOBSM2DpHTo7H8QECdIzdzB85lOSgodk7WPT_jCdyWmqgeXaeuNS6H5xVsL90qLNn6RLqBLWbGdCoNEuqXdJZEwbkMpcSs-r7QPQTJCGfv0s51xzvtKhNbbuUO-piZXCKjtvXsDoqNa1dBNp7OOUnun1LhtILgoHCABi1C2p2U_PVeL_ssb-OHAtF8evL8Y91csEg4tbHO97psvz3wLhIj-kS84IJB_gAkdI1zWKu6e7jrPGBpEeeXNJ1gGfOoQDkMSlpeKWLXe29btJQoxkVK3XTwFJAwWX_kTvOF12a4F48ljzTibm44Lxuk8ZdZ9s6Ej_oTxdxcJBwQm_qSReJ-8MuWpfYajTgigEDF_fa3ygpJLMY7gQPWOgDnJcY99h64lpWBmsIPBh52jO8Ui4HgCp-qyWVNrllf4Ki_9j43UKjwyQz0T02Eiuj4hPLXNsqYvdbeA1Bd56gM5kYjMQlc7m0iW3wXQnvfuknEoiyiI4XVQbtlS-nNpeNwbuCvhv4mZgRmcpgirUWXsHtVQmJB0NYhNeeIxVmZy6pI123xuBhI5PYgv-Gmsc6348y8UAIftByDdVTWmT2f7kjGjwHB7vESbAMqvl5aAI1JYE7RdGHeaRLKOVpd0SOKIHCaQXgextNKl2Xg0LalHX4CoGyLqmsy8QXaA7chy7mN9AmZB0nYOzETjHZsHmboUjN3adbZn7aOlFc2KR0wgFEmr3aJLj8QWryNeXr7sB0WOzypQnXlbVuJNQWceyXnWxw8gafNqQUEF5aX_ZKFRq-8vyhM7okBrJ0R-0gukl_rgv9pv_jXiXzjQ13siLfW4mSALIsxZbAcexX2rf7Gk_e9z1JLc4HZUi8nN23gQ1HpqhcqjHA9Ii919SCaa9bWVrtH8LWvTdd-EzBZYNoF6gU4m-Dc7CRvGEQ_jPF3PiM_JIrWI3Tu0d5KPwh-Ax19MWlBSryOfwVv4s29DpgJn5fIrxe7eMwDVsOQJ1EnNQHYDfn5A9veRiNZCtnKe2MpQs4SUvRnLc3ZQdgh5bR8SB2qmJO4FmgoRogoBE-Zx0kvY4a2bgKWE0pNtuNU-_V0UDR2yCT4_1ZvCr8Lu6QSz2OG_hj8K2RZtgTjYQQ6LWgqRN8_JwNc979KmSUEnmIcmdICBFuFXv5T9ncke6RO9YjTbnELELxnCWR5AwfO34XqDwwd21QzzcTWjnz85N_tkbrbK95v4e5Wv9ZflqjdPMJtX0u41SwT6fdLmfwyFhztUi6TtICFYVwSjMm3oImW3-o_BAohn_SCkURZ-JDPZz5lChKnQIaq0ohnbUzP8DYJ-c8hy6sl8NgvOWETOLRE-s_=w1227-h892",
          my1: "遊戲設計",
          po: "為了面試寫企畫書跟畫圖( ..)φ…",
          
        },
  ],
  },
  
  mounted:function(){        
      swiper = new Swiper('.carousel', {
          effect: 'cards',
          loop: true, 
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          },
          pagination: {
              el: '.swiper-pagination',
              
              type: "fraction",
          },
      })     

      }
});
