
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello World 
      </Text>
      <Image source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRcVFRYVFRUXFxUWFhcVGBYYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHR0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLf/AABEIAKUBMQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xAA9EAABAwIEAwUHAgUEAQUAAAABAAIRAyEEBTFBElFhBhMicZEygaGxwdHwQuEHFFJy8RUjYpKyMzSCosL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJREBAQACAgMAAgICAwAAAAAAAAECESExAxJBE1EEYQWRIjKB/9oADAMBAAIRAxEAPwDyZOQCKyaihCQRQChFBEBAFJGECgESkkAigFKUoIwgCFIFGAnhIE5JoToRQACcCnBqHCgHNKcQowngpUEApGhAIykDimpFKEApSJTlE8oMCU2UkIVEehCcxPhQowJFEhNlAJKEUgmkCE1OKYU4DkxwT2oOShmJIoKiUwimpyYJJJJAFEFNRQDkUwFOQBSlAlIIAhFEIFAGUQVESntQEgcjKbCICQSBycCownsaTYCT0SpwiFLQoueYaCT0XZdl+xRqjireEct/zqvQcp7N0aIADQSBEkCfz9kDTyDB9ncTUEtpnWL+5dLk38ParodVMC8jqCI+q9VZhQNAAp20kj08ur/w3cSSHwItbUx8pWfif4f1mNJBk7AfX82XsJamFiWxp88Zhl1Sk4tc0yNVQJX0Pjsnp1QQ5gM9Py64DNf4a3c5lTWSGxvy6BVCsebSiFu47sjiKXtNn+28eax62Gc03ReQYCnJiIKQ2cUwhPQhIzAUZSIQKeknFMSQKqQECimp4SoBJFJLZs4BFFJWQIpJIApJJIBAJwCDUUAik1JJAOlIlBEBANhOancKUJbB4RQCs4LDGo4NHzA+aAOCwNSq7hpsLj0C9C7Jdii0h9XXlFvXULT7L5Wyi0CZJ31+S7GgbJHocPh4HlorYYmsE7qdrVKjQlKNQJrUjPRQARhMjKmipVH8yrr43WfXaBNvQSlacihiqzeXEuG7W4VzwSKQHkGrtjVaTHCq2MwjXjT6KJmu4PE3tgwmwug7T5KaT3PHsk+iwlpGNnJpSlOQhMjSUES1CFQGEIRCJUnowhIIoQmWjpSTUkaGlCUUyU4KgKEooQgDKKCKASchCKASSBKCAeiE1OCAdKCSMJA4Fa/Z9kv+Zk/IarMp4dx0C6nIcq4RxPNjsLpW6OTbvOztObjQaSb+my6VlTqudyMNaIAPoAfmugoMHJR2pdY4a6K0xwIWbVxVNguY+Q+yfgMRI13Ke9DS28oA/ZRl6XEN1G16TsdO6nYwLjs/7QtwnFUdxQBMAFx5kho6A32gqpgf4iYQ61mNdAdwucLA/wDIHh+M3uql/pNn9u5rNCzcVUAN/iYUmHzJlVgc0yD7lHiACPaHqllZejks7ZeLIJt8NlXdVc3UcTeY+oT8XTgyFAyof25rmyvLpxnClmeCp1xcSRpyXnOb5Q6kXE2aDAJtxE7Abr1WoGOuBDhtoVzme4NrwTYEbuaHDyO4WmHk1xWWfj3zHm6SmxdItcRax20US6HPooQhFNLkGCBSlJPQCEUCEoRoCkhCSNBmgJwCaE8KkwYSIRlIoABEIIhAFIoSigGpwCUKfB4V1Rwa0SSgIgFo5fk1WqRwsMc13PZrsc0Q6qJ6Fdnh8CymIa0AIJ59l/YQkS9y2aXYaiQutfTjyKjYYKzufLSY7ZFDIKNBhloPuWGA3iIgDkF0+bVjETquWYOGqXHYiPX9lGeXOl4Y8bdVlzBTZJa4b8/gVO7MbQ1rp/PILWw2Hmj49S2Tt5Dy2VShhG8OnlEo5+Dj68m/iHnWNp1u67002QIDPDM6y+JPlMWK3P4e51UqOIAcGbBz+8cB1cGtnfbSPNd3i8oo1v8A1WB1ouNlLk+TUaBJpsDZ5CB6Ktz11otc722KNOwlOdRkQnh4hPY5TqDdcF2xyF9cWEmYjmIM/BcvkH8NnmqH1SA0GeEfl17I9kp1KkD5q8behdXlXweBYxoYGgQI/Co8XhQLgwtPQKhmDxwGbI9YXtWRimWLfSem3ms1jI13+ey18S0cBPnHp+6x2ukR+W/CuXOOnx1E9pni5b81Xx2HDmOO5BtsrzmyLW0+d1QzrFd3TFwCSBPxv7p9FOPas7w8uzEQ/lzB2NwR8FXhS5hiA+q9w0LjHlsoZXY4hIUbgpJQITCEoAp7lG5Mz5SlMRBTI6UkkkBmgJwQRATQcESEgnIMxJGEiEAgnAIKSkwuIAFygJcHg3VXcLRK9M7K9lxTaHPb4lH2KyEU2io4HiPNdrSG2iZFTZy2U4CaBCkYFnauRHWFlSqG5Vus4EKiDJWVvLWThm48OOpnyCxsZ7YMaR77ro8S2x6rmsxs5utyD6HRTlNVWN4ek4Z/+02P6Le4LnslzjvW+G8Eg2gAjVaeBxrTRY4WtwrzHs7mXBWe0EwXum/hHiPS35dXOkXt6Zicbo1uu5Whgn2F/suZwjy54BaL77fFama4/wDlaD60Atpsc4jTQW+KMZaMrI23EDUwoaOPaTGy8Zq9sq1ckmqGg7ExA5BNwvaVzD/6wJ11Wl8VZ/kj3drpUFaoWmQqOQZsK9GnUiOIXHIix+IVzHO8PELRrKnSpU385IusHtDjCymSD6fsoMTmDhZoDp6rms7qOcQHecbKPa1frHYYmqIYJjfzB/B6rMqU7kMAAk76c4Vmph+8ax87R0H4IVaIBabHf89VnlutMdQahDBPIkE+5ea9rM6793C32Rc9TH7ldL2vzNzafdskTqdzsY5WXnhCvx+O481Hk8ky4hkJSnEIELViEooQimDSmkJ5KY8pwGFCUkoTAykgkgKgSQBRTZnAopgRQZIgpqlw1IvcGjcoCTC4Z1QhrRJK7ns32U4SH1InlspOzeT922XC/wAF1lJii5aXjjtew1KBHyKtMbGh9x+6gw5U/ElvZ+uj2P5iE7i6qrUrAakLHxua34W6qMqvGNXEVJ3VUuUVOvIE6p3Ep+q+GVGl2/5rCZTywvjiG83sn90HG+m8fJb+XslvIbWsneUzhTOVOLQ1jg2NBBj3rzvFdkcThKpqOu2STUZe06Aagn8letUBDocIPnY9Qr9anxtItcHVaYRGVcNlWYNLG8wBIiDcKzm4FfD1aJdwiowtkieGRAMbxay5zOcuxdKuTQZxtJLnEkC5Oh3sOXRVndpBSPDWa6m7QFwkHrI2usvy4zP1l5Z+86eZZ3lT8NWdSfMtMdCNnNPIhSZLg6dSo2Q8uJH6gGDnNp02XYZrnmEr2e+drNknfy6/5VbAvwwIcyWAbEW9V03ySdp4esdneGjQZTYZ4GxNo6n1la/GC0z4rXJ08oXDZdn2HY0TVBFt+U7b6qpnvbZoHDTPKD+mCCZHP2f/ALBR9a/HZ4XCtJJWB2lexlhcn0H3UfZfOKtXD946TrpuAYElYea4TEYh5cYaAbAHbbzP3Uf0tv8AZvNRwmmXiYtJ8JI08loYjxFpMTeYIMcrhcrgcqc0+LVdLgqJCWM5O3hynazDm5uB8PiuMK9L7T0j3Z36brzWqIJWuTKGlBJMJSM8ppTZTZRoCUCnIEKgYQmlSQgQgGJJ3CkgM+UQU80UhRKrcRo2UQpW4clT4TLn1HBo/wAJbg1UOHwzqjg1rSSdAN16B2d7B1GltSo5oOzRcqtkVGnhqjJeALgudrPQr1fL6jHMBG41S7PphjLS0RKaIGq6DEMEHdcxmdSDZY5TTXC7XW1xsoquKOgWY3GQFzOeZo5rhB3ACcgtdfi60NkXP5ZZOUY6rxEOosvyPiA2mVVoY1xext+HhLnX3Giw8Q8nEmq2oAeLmYb0VTHhNyu3fPteI6J/GFUo4wVWagmLwZHmosLXAGynS9tzL2NcD8Vr4GmWiBf82+y5PCYxzX+ETxTbnbRdNl+I42y0xPwPX32P7qtI21mQ6zhKfVbwNJZNgbTZVv5nhu9sf8tQD15KXE4nwcTfGP8AjHqOacTkzMCx7wXPEcRkCZI8zAVPOuzlOs08TQVq4HEtsdvT4FXqmJEL5i+OeW5Z5Zay25Lz28Uz/sG1kupiIvC4sGq+o+lBHAdByGk/NfQ+OphwNl51mWHoUsQZLWuqCxJAB4SBF9/E33TyXZ/jP5Wefk/H5Of1Wnhm89OLy/K3l+lzrPXXysrudYF/G1nAWjaJPE0QS4c/Zj3LtMgyh1Z5IDeFsgu4gRMnleYiy7jL8qZTAIHERYGL/wCF7tydmeMk19cx2Uyp1PDtpwWyS8ybyTMQNBoPcukp5cI0utPuh9E7u4FllMaVrAq4IBPp04WliadpVdlNVonPdpWf7Z006rynEe0fNeu9qQO6Ntt15FiSJPmqvSYhc5MT4CQA6Jbh6MKap5CNuSNjSGUlMAOSMBHsekCSs25JAt5I9oPVWSVnw8kke0GlQgD9kW1f6W+qRb0Q4Utno12Id5K3luP7sOPCSTuFWLPyVPhiB/kI2WgxePL2kOkfMLZwPa2sw0wHy0cIMel+SqNwzHC8/D7qzQyalYkKplE3Gu9f2splwpNcC6ATewlZufZwwWaeJ3S6x24WmDxNYAdzum1r7KLYuY6RnNiWwQR/lYme1O8bMkOsRYlbnAFWr4cFVMk3FWo5seBurXgXnQjce9ZdbFMc6eMsM3tZ3I+ey3DhAQqT8uE6Jyi4rmXZuAOCm4/ddDg6rWtE6+ev2XN0MvA/SfRXaTItHyS3D1XQ08V4g42jlt1WlTxxpnjBkH2o584XC4jFQ7gbc/qnRvn16Khjc4fTEBx+afaensdDtQAB3gEEaggg+5ZOdY/CVHf7bu7eYd4HQ1/MEA63XkOI7UPcwtc2+xE+hH5qs7Kc37up4piZB1jz6KPLhllhZO0Z61w99weLHCANld/mxzXm+W59xAQZn+k8XyWic7ixt/cQ0epsvk8v4/kxtmnJy6zF5gADdeTdpMR/OZg2gyQ5sNDhcAm7padQLein7RdsA1pbTcHvIi08LL6k7nouMynMa1Gp3jBLyZmJJkyRa917H+K/g5+O3yZ9/GmGN3uvo/J6NPD0mUKY9hlzu525PUkrcouAAHQLyTB9q3Cm1xd/um5ZUHBB+o5eas5X2nrVXRVimA79JkuAv4eXKV62nTHpTzxVwP0sZJ/ueYA9Gn/srpAF15ie2YpEVHkNNWq98GTwsaOFmmpgM9Surr560YbvONpnhMyI1CcgtbWLaIkLP4gN1UbnLXU2FzgC9odE3uAVWfmTdIkc7hOibVu1dY904tcLC4PLpzXk1W5Njr7l2/ad7ntPCSBylcgynGspWqkZ7qXJMLSNR71vUqLXezryJHyTK2COsR5AQp2emO1h5Jwpq8/C7cQ8r/XRB2FiZ9dk9mpGmmlquOohRmkB+FAQDzR4lLwD8+5TSwfhS4MOIoo91+X+ySAmfllQQPDcAjxMOvMg2PRRjAvAJtbW4t7lvVGSLkRvyWcyiSP7nMaANBLwCZ96jhXqbhuz9aoOIAQdLgT9VNX7P1mWPCOcS6POPqulGBEb8544vvzURwFPkb39v6wpmfKrjqOYbh6jTEE9YP1WvQqFoEgnyIPymy2mMa0CBA6vHu1N1Xq0Wl0mT5PaPKb3RMuRcOFF2JBtwmfd+yh7/QBp+J+QWq6g0AwAbf1X9YVdjHNBgt6gn8uq9sU6qGmZ1Y6dhwuk/BLwn9J9CPffZOpVXkm7ZjmT81LULiNW9eZ8wjcGr+jWMBaHRrsZnWNlXdTPF7BPlJ+QV3DE82z1E/RWGCdeH/qPqFPsv1VaWwLHSeQP1hVcVUcXCm2RJgmL+QH16rVItEj3NCp4Gk04ng4ZHdzItwlzxG+/2SmRWIG4BzWwGOjX2deulys3E5S5xuz1b+y7N2BLdeE6x4nfJNfgyQDpe8E3nY3T/JP2Xpf04V3Z0f0i/wDxP2SodmwTBY0W/U038pauyrUh7JdA1vPz4lXbgGk3cDr+pw//AEn7cdlcHO4fs4zam0+TY+IClq9n6WhaPQkLa/lm8UMI15uI081McDMz/wCTrKMtb7pTxbcz/obI8LQLxZsfRRtyJ0zwujYx+y3qVGATxx4nD2o9lxGs9E+lH9Q/7XTx453TmDDrZAHatdPKHTfyKFLAOpvpjicGGW8MXuREHXc7ro20gbcQ+N1n5jHf4VszNR2nkI16n4Kvyfo745OVev2PZUPFD568ROsbz+BWKmREU+74XltreKOhjRdIzH1G+ANB2gwB5jqU59aq6RAHQtBteJhTM8//AA7hh+mVhW920RTdMRPCYPSVapVXHRrvOD9kKrC10l7WjoNPcVL/AKoSPA6esQT8EsrkqSKuNpPcI4SfdFyJWIcsrEktpu84MLbq46oRq699eVk3vWm7iCY6Jy36LJ8YH+m13aUnHQGGk/CEqeXVmnxU3gaEgGy321aenE33I06uha8Ng2IlP2vxPrGFWwVQD2HHybGg5gplGk/kQOWpXSVnh3F4uI/qdH3CgpgNkNtzjdL8l+n+OfHP4rAuuQxwteQZtqbfW/mk3I6hAPGwTe8kRqNPstTOXu7t5n9DhH/xOy16LWtptIadBfnHu6IvkEwjk25K8G7m+cPj/wAUHZHUN+NvU+KPkumxVEOIdeJgiw+SrYgtBDQ3TcniJlOZj1c//ozv62+jklv8Pl/1b9kke49Yw67bC5vCslkU2EGIfS2BmajeaSSW+jvTQxJLY0PuHKVVGIJMQALbcyPugkr1GOFtnJrsU4C33SpYl0bXIH05pJKGqTv3RrqTsm1az49rY7cpQSS3RYqYLFv4oJmw+MD6q+yo7hmefwICSSvJOKbDvLj8R6p2NeWAkGw20+SKSWuhv/lWc3GPc4CYBO3mreRSK1aoDctptPlDov7kkks/+tVj3HQ0a0jT85qKviDBHOPyN0klGp6Jlt8lilWMQPiqzcTAMiY8tOWiKSmXhrZyrNx5DrAX9Oit08YTIgJJJ0oz6dYuDbC7nnSY8ZKfQq3iBySSVpiXvLkkAkaSOapYn/3OG/uefVkJJJY9/wCzy6bmIxBabff80WdicxeDAgRyARSVY9Jy7R/zz36n7agaKTvnXvoUkkXs50biKzpN91EKh0N7IJJQhbUJtsXAJNAIk9PmUkkGLWOieMiBpATnuIIg6x80Ektn8MzEE03yf0PPvgrROJmk1oaAJ2J6gfBvxQSS7kP6jxDiwkSTeOWir1ahN/ckkqxhVD3ruaSSSvULb//Z'}} style={styles.img}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
    }, 
    text: {
      color: 'darkslateblue',
      fontSize: 30 
    }, 
    img: {
      width: 100, 
      height: 100, 
      borderRadius: 100/2
    }

})
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Hello World</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
