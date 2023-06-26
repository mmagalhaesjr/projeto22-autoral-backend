-- CreateTable
CREATE TABLE "agenda" (
    "id" SERIAL NOT NULL,
    "id_quadra" INTEGER NOT NULL,
    "data" TIMESTAMP(6) NOT NULL,
    "valor" INTEGER NOT NULL,
    "disponivel" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quadras" (
    "id" SERIAL NOT NULL,
    "id_tipo" INTEGER NOT NULL,
    "descricao" TEXT,
    "nome" TEXT NOT NULL,
    "foto_principal" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quadras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_agenda" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "pago" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_quadra" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tipo_quadra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "adm" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessoes" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_telefone_key" ON "usuarios"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "sessoes_token_key" ON "sessoes"("token");

-- AddForeignKey
ALTER TABLE "agenda" ADD CONSTRAINT "agenda_id_quadra_fkey" FOREIGN KEY ("id_quadra") REFERENCES "quadras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "quadras" ADD CONSTRAINT "quadras_id_tipo_fkey" FOREIGN KEY ("id_tipo") REFERENCES "tipo_quadra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_id_agenda_fkey" FOREIGN KEY ("id_agenda") REFERENCES "agenda"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessoes" ADD CONSTRAINT "sessoes_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
