"""update Profile table to allow linkdn github and insta links

Revision ID: a0fc601d5534
Revises: f4574a3a0891
Create Date: 2024-10-26 19:22:46.705624

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a0fc601d5534'
down_revision = 'f4574a3a0891'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Institutes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('logo', sa.String(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('profile', schema=None) as batch_op:
        batch_op.add_column(sa.Column('git_hub_link', sa.String(), server_default='', nullable=False))
        batch_op.add_column(sa.Column('linkdn_link', sa.String(), server_default='', nullable=False))
        batch_op.add_column(sa.Column('insta_link', sa.String(), server_default='', nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('profile', schema=None) as batch_op:
        batch_op.drop_column('insta_link')
        batch_op.drop_column('linkdn_link')
        batch_op.drop_column('git_hub_link')

    op.drop_table('Institutes')
    # ### end Alembic commands ###