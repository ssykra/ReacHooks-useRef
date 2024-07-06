import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 8,
    margin: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },

  teks: {
    marginTop: 5,
    marginBottom: 5,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 8,
    color: "black",
    textAlign: "center",
    fontSize: 12, 
    height: 20, 
    fontWeight: "bold"
  },

  input: {
    width: '100%',
    paddingVertical: 2,
    borderWidth: 2,
    borderRadius: 8,
    height: 40, 
    textAlign: "center"
  },
});
export {styles}
