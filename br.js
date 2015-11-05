i18n.map('br', {
  global: {
    save: 'Salvar',
    create: 'Criar',
    logout: 'Sair',
    back: 'Voltar',
    cancel: 'Cancelar',
    delete: 'Deletar',
    confirm: 'Confirmar',
    choose: 'Escolher',
    noPermission: 'Você não tem permissão',
    passwordNotMatch: 'Senhas não conferem',
    optional: 'Opcional'
  },
  accounts: {
    schema: {
      emails: {
        title: 'Emails',
        address: 'Endereço',
        verified: 'Verificado'
      },
      password: {
        title: 'Senha',
        new: 'Nova Senha',
        confirm: 'Confirme a Senha'
      },
      profile: {
        name: 'Nome'
      }
    },
    index: {
      title: 'Contas',
      actions: {
        edit: 'Editar',
      },
      tableTitles: {
        name: 'Nome',
        email: 'Email',
        roles: 'Grupo',
        actions: 'Ações'
      }
    },
    update: {
      title: 'Editar Conta',
      messages: {
        noPermissions: 'Você não tem permissão para editar este usuário'
      },
      sections: {
        profile: {
          title: 'Perfil'
        },
        roles: {
          title: 'Grupos',
          selectRoles: 'Selecione os grupos do usuário'
        },
        changePassword: {
          title: 'Alterar Senha'
        },
        deleteUser: {
          title: 'Cuidado',
          advice: 'Deletar usuários pode causar problemas',
          button: 'Deletar Usuário'
        }
      }
    },
    myAccount: {
      title: 'Minha Conta',
    },
    create: {
      title: 'Criar Usuário',
      createInvitation: 'Cria convite',
      createUserNow: 'Criar usuário agora',
      inviteOther: 'Convidar alguém',
      selectRoles: 'Selecione um novo grupo de usuário',
      email: 'Email',
      messages: {
        successfullyCreated: 'Convite criado com sucesso'
      }
    },
    changePassword: {
      title: 'Alterar Senha',
    },
    updateProfile: {
      title: 'Editar Perfil',
    },
    register: {
      title: 'Registrar',
      registerButton: 'Registrar',
      fields: {
        email: 'Email',
        name: 'Nome',
        password: 'Senha',
        confirmPassword: 'Senha (novemante)'
      },
      messages: {
        invalidEmail: 'Email Inválido',
        invalidInvitationCode: 'Convite inválido',
      }
    }
  },
  collections: {
    create: {
      title: 'Criar {$1}'
    },
    update: {
      title: 'Alterar {$1}'
    },
    delete: {
      title: 'Deletar {$1}',
      confirmQuestion: 'Tem certeza que quer deletar {$1}?'
    },
    common: {
      defaultPluralName: 'itens',
      defaultSingularName: 'item',
    }
  },
  config: {
    update: {
      title: 'Configuração',
    }
  },
  dictionary: {
    update: {
      title: 'Dicionário'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'Arquivo não encontrado [{$i}]',
      errorUploading: 'Erro ao fazer upload',
      errorRemoving: 'Erro ao remover arquivo',
    }
  },
  pages: {
    schema: {
      title: 'Título',
      url: 'Url',
    },
    index: {
      title: 'Páginas',
    },
    create: {
      title: 'Criar página',
      chooseTemplate: 'Escolha o Template'
    },
    update: {
      title: 'Alterar página',
    },
    delete: {
      title: 'Deletar página',
      confirmQuestion: 'Tem certeza que quer apagar esta página?'
    }
  },
  attributes: {
    users: {
      pluralName: 'usuários',
      singularName: 'usuário',
    },
    file: {
      choose: 'Escolha um arquivo',
      noFile: 'Sem arquivo',
    },
    image: {
      choose: 'Escolha uma imagem'
    },
    images: {
      choose: 'Escolha as imagens'
    }
  },
  tabular: {
    search: 'busca:',
    info: 'Mostrando _START_ to _END_ of _TOTAL_ registros',
    infoEmpty: 'Mostrando 0 to 0 of 0 registros',
    lengthMenu: 'Mostrando _MENU_ registros',
    emptyTable: 'Nenhum registro dispoível na tabela',
    paginate: {
      first: 'Primeiro',
      previous: 'Anterior',
      next: 'Próximo',
      last: 'Último',
    }
  }
});
