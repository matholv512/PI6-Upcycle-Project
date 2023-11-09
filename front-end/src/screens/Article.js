import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {  Button, Icon } from 'react-native-elements';


const Article = () => {

  const userImageUri = 'https://via.placeholder.com/40';  // Imagem de exemplo para o usuário
  const postImageUri = 'https://via.placeholder.com/200';

    return (
      <View style={{ margin: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10 }}>
      {/* Cabeçalho do post */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: userImageUri }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Nome do Usuário</Text>
      </View>

 
      <Text style={{ marginTop: 10 }}>Legenda do post aqui...</Text>

      <Image
        source={{ uri: postImageUri }}
        style={{ width: '100%', height: 200, marginTop: 10 }}
      />


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
      <TouchableOpacity>
                    <Icon
                      name="thumbs-up"
                      type="font-awesome"
                      color="#888"
                      size={30}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <Icon
                      name="bookmark"
                      type="font-awesome"
                      color="#888"
                      size={30}
                    />
                  </TouchableOpacity>
        <TouchableOpacity>
                    <Icon
                      name="share"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      
                    />
                  </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, padding: 10 }}
          placeholder="Adicione um comentário..."
        />
        <TouchableOpacity>
          <Button style={{marginLeft: 3}}
            title="Enviar"
          />
        </TouchableOpacity>
      </View>
    </View>
    );
};

export default Article;
